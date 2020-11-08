import { Repository, getRepository } from "typeorm";

import Usuario from "../../entity/Usuario";

import IUserDTO from "./IUserDTO";
import IUserRepository from "./IUserRepository";

import Util from "../../utils";
import TipoUsuario from "../../entity/TipoUsuario";

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
      relations: ["contato", "tipoUsuario", "tipoUsuario.tipo", "curriculo"],
    });
  }

  public async get(login: string): Promise<Usuario> {
    return await this._userRepository.findOneOrFail({
      select: ["usuarioId", "login"],
      relations: ["contato", "tipoUsuario", "tipoUsuario.tipo", "curriculo"],
      where: { login },
    });
  }

  public async credential(login: string): Promise<Usuario> {
    return await this._userRepository.findOneOrFail({
      relations: ["contato", "tipoUsuario"],
      where: { login },
    });
  }

  public async add({ login, senha }: IUserDTO): Promise<Usuario> {
    return await this._userRepository.save({
      login,
      senha: this._util.hashPassword(senha),
    });
  }

  public async delete(usuarioId: number): Promise<Usuario> {
    let user = await this._userRepository.findOneOrFail({
      where: { usuarioId },
    });

    return await this._userRepository.remove(user);
  }
}
