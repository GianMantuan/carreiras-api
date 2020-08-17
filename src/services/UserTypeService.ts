import { injectable, inject } from "tsyringe";
import { Repository, getRepository } from "typeorm";
import TipoUsuario from "../entity/TipoUsuario";

interface IUserType {
  usuarioId: any;
  tipoId: any;
}

@injectable()
export default class UserTypeService {
  constructor(
    @inject(TipoUsuario)
    private _userTypeRepository: Repository<TipoUsuario>
  ) {
    this._userTypeRepository = getRepository(TipoUsuario);
  }

  public async all(usuarioId: number): Promise<TipoUsuario[]> {
    return await this._userTypeRepository.find({ where: { usuarioId } });
  }

  public async get({
    usuarioId,
    tipoId,
  }: IUserType): Promise<TipoUsuario | undefined> {
    return await this._userTypeRepository.findOne({
      where: { usuarioId, tipoId },
    });
  }

  public async add({ usuarioId, tipoId }: IUserType): Promise<TipoUsuario> {
    try {
      return await this._userTypeRepository.save({
        usuarioId,
        tipoId,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  public async update() {}

  public async delete({ usuarioId, tipoId }: IUserType) {
    try {
      const userType = await this._userTypeRepository.findOneOrFail({
        where: { usuarioId, tipoId },
      });

      await this._userTypeRepository.remove(userType);

      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
