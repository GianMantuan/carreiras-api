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

  public async add({ login, senha }: IUserDTO): Promise<Usuario> {
    let user = await this._userRepository.findOne({ where: { login } });

    if (user) {
      throw new Error("User already created");
    }

    try {
      const user = await this._userRepository.save({
        login,
        senha: this._util.hasPassword(senha),
      });

      return user;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  public async delete(usuarioId: number): Promise<Usuario> {
    let user = await this._userRepository.findOneOrFail({
      where: { usuarioId },
    });

    return await this._userRepository.remove(user);
  }
}
