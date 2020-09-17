import { Repository, getRepository } from "typeorm";

import IUserRepository from "./IUserRepository";
import Usuario from "../../entity/Usuario";

import Util from "../../utils";
import { IUserDTO } from "../dtos";

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
    console.log(login);
    return await this._userRepository.findOneOrFail({
      select: ["usuarioId", "login"],
      relations: ["contato", "tipoUsuario", "tipoUsuario.tipo", "curriculo"],
      where: { login },
    });
  }

  public async add({ login, senha }: IUserDTO): Promise<Usuario> {
    return await this._userRepository.save({
      login,
      senha: this._util.hasPassword(senha),
    });
  }

  public async delete(usuarioId: number): Promise<Usuario> {
    let user = await this._userRepository.findOneOrFail({
      where: { usuarioId },
    });

    return await this._userRepository.remove(user);
  }
}
