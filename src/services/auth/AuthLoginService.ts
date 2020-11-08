import * as jwt from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import config from "../../config/config";

import { ILoginDTO } from "../../repositories/dtos";
import IUserDTO from "../../repositories/user/IUserDTO";
import IUserRepository from "../../repositories/user/IUserRepository";

import Util from "../../utils";

@injectable()
export default class AuthLoginService {
  constructor(
    @inject("UserRepository")
    private _userRepository: IUserRepository,
    private _util: Util
  ) {}

  public async login(user: IUserDTO, { login, senha }: ILoginDTO) {
    if (this._util.validatePassword(senha, user?.senha)) {
      return jwt.sign(
        { usuarioId: user.usuarioId, login: user.login },
        config.jwtSecret
      );
    }
  }
}
