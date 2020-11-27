import { injectable, inject } from "tsyringe";

import Usuario from "../../entity/Usuario";

import IUserDTO from "../../repositories/user/IUserDTO";
import IUserRepository from "../../repositories/user/IUserRepository";

@injectable()
export default class UserSaveService {
  constructor(
    @inject("UserRepository")
    private _userRepository: IUserRepository
  ) {}

  public async add(user: IUserDTO): Promise<Usuario> {
    return await this._userRepository.add(user);
  }
}
