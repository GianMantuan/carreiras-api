import { injectable, inject } from "tsyringe";

import Usuario from "../../entity/Usuario";
import IUserRepository from "../../repositories/user/IUserRepository";

import { IUserDTO } from "../../repositories/dtos";

@injectable()
export default class UserSaveService {
  constructor(
    @inject("UserRepository")
    private _userRepository: IUserRepository
  ) {}

  public async add({ login, senha }: IUserDTO): Promise<Usuario> {
    return await this._userRepository.add({ login, senha });
  }
}
