import { injectable, inject } from "tsyringe";

import IUserRepository from "../../repositories/user/IUserRepository";
import Usuario from "../../entity/Usuario";

@injectable()
export default class UserGetByLoginService {
  constructor(
    @inject("UserRepository")
    private _userRepository: IUserRepository
  ) {}

  public async getLogin(login: string): Promise<Usuario> {
    return await this._userRepository.getLogin(login);
  }
}
