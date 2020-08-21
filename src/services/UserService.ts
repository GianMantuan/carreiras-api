import { injectable, inject, container } from "tsyringe";
import { Repository, getRepository } from "typeorm";
import Usuario from "../entity/Usuario";
import Util from "../utils";
import UserTypeService from "./UserRoleService";

interface IUser {
  usuarioId?: number;
  login: string;
  senha: string;
  tipoId?: number;
}
@injectable()
export default class UserService {
  private util: Util;

  constructor(
    @inject(Usuario)
    private _userRepository: Repository<Usuario>
  ) {
    this.util = new Util();
    this._userRepository = getRepository(Usuario);
  }

  public async all(): Promise<Usuario[]> {
    try {
      return await this._userRepository.find({
        select: ["usuarioId", "login"],
        relations: ["contato", "tipoUsuario", "tipoUsuario.tipo"],
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  public async get(login: string): Promise<Usuario | undefined> {
    try {
      return await this._userRepository.findOne({
        select: ["usuarioId", "login"],
        relations: ["contato", "tipoUsuario", "tipoUsuario.tipo"],
        where: { login },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  public async add({ login, senha, tipoId }: IUser) {
    const userTypeService = container.resolve(UserTypeService);
    let user = await this._userRepository.findOne({ where: { login } });

    if (user) {
      throw new Error("User already created");
    }

    try {
      const { usuarioId } = await this._userRepository.save({
        login,
        senha: this.util.hasPassword(senha),
      });

      await userTypeService.add(usuarioId, Array(tipoId));
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  public async update() {}

  public async delete(usuarioId: number) {
    let user = await this._userRepository.findOneOrFail({
      where: { usuarioId },
    });

    await this._userRepository.remove(user);

    return;
  }
}
