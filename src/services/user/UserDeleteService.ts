import { injectable, inject } from "tsyringe";

import IUserRepository from "../../repositories/user/IUserRepository";
import Usuario from "../../entity/Usuario";

@injectable()
export default class UserDeleteService {
  constructor(
    @inject("UserRepository")
    private _userRepository: IUserRepository
  ) {}

  public async delete(usuarioId: number): Promise<Usuario> {
    return await this._userRepository.delete(usuarioId);
  }
}
