
import { inject, injectable } from "tsyringe";

import { ILoginDTO } from "../../repositories/dtos";
import IUserDTO from "../../repositories/user/IUserDTO";
import IUserRepository from "../../repositories/user/IUserRepository";

import Util from "../../utils";

@injectable()
export default class AuthLoginService {
  constructor(
    @inject("UserRepository")
    private _userRepository: IUserRepository,
  ) {}

  public async login(user: IUserDTO) {
    return await this._userRepository.credential(user);
  }
}
