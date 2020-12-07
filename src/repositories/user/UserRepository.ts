import { Repository, getRepository } from "typeorm";

import Usuario from "../../entity/Usuario";

import IUserDTO from "./IUserDTO";
import IUserRepository from "./IUserRepository";

import Util from "../../utils";

export default class UserRepository implements IUserRepository {
  private _userRepository: Repository<Usuario>;
  private _util: Util;

  constructor() {
    this._userRepository = getRepository(Usuario);
    this._util = new Util();
  }

  public async all(): Promise<Usuario[]> {
    return await this._userRepository.find({
      select: ["usuarioId", "login"],      
      relations: ["tipo", "contato", "curriculo", "curriculo.experiencia", "curriculo.certificado", "curriculo.formacao"],
    });
  }

  public async getId(usuarioId: number): Promise<Usuario> {
    return await this._userRepository.findOneOrFail({
      select: ["usuarioId", "login"],
      relations: ["contato", "curriculo", "curriculo.experiencia", "curriculo.certificado", "curriculo.formacao"],
      where: { usuarioId },
    });
  }
  
  public async getLogin(login: string): Promise<Usuario> {
    return await this._userRepository.findOneOrFail({
      select: ["usuarioId", "login"],
      relations: ["contato", "tipo", "curriculo"],
      where: { login },
    });
  }

  public async credential({ login, senha }: IUserDTO): Promise<String> {
    const user = await this._userRepository.findOneOrFail({
      where: { login },
    });

    if (this._util.validadePassword(senha, user.senha)) return this._util.createToken(user)
    else throw new Error()

  }

  public async add(user: IUserDTO): Promise<Usuario> {
    user.senha = this._util.hashPassword(user.senha)
    return await this._userRepository.save(user);
  }

  public async delete(usuarioId: number): Promise<Usuario> {
    let user = await this._userRepository.findOneOrFail({
      where: { usuarioId },
    });

    return await this._userRepository.remove(user);
  }
}
