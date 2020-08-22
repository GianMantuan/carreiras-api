import { injectable, inject } from "tsyringe";

import IUserRepository from "../../repositories/user/IUserRepository";
import Usuario from "../../entity/Usuario";

@injectable()
export default class UserGetAllService {
  constructor(
    @inject("UserRepository")
    private _userRepository: IUserRepository
  ) {}

  public async all(): Promise<Usuario[]> {
    return await this._userRepository.all();
  }
}
