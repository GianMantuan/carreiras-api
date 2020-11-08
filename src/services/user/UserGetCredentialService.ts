import { injectable, inject } from "tsyringe";

import IUserRepository from "../../repositories/user/IUserRepository";
import Usuario from "../../entity/Usuario";

@injectable()
export default class UserGetCredentialService {
  constructor(
    @inject("UserRepository")
    private _userRepository: IUserRepository
  ) {}

  public async credential(login: string): Promise<Usuario> {
    return await this._userRepository.credential(login);
  }
}
