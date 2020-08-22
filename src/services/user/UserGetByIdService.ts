import { injectable, inject } from "tsyringe";

import IUserRepository from "../../repositories/user/IUserRepository";
import Usuario from "../../entity/Usuario";

@injectable()
export default class UserGetByIdService {
  constructor(
    @inject("UserRepository")
    private _userRepository: IUserRepository
  ) {}

  public async get(login: string): Promise<Usuario | undefined> {
    return await this._userRepository.get(login);
  }
}
