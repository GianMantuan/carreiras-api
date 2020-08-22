import { injectable, inject } from "tsyringe";

import IUserRolseRepository from "../../repositories/userRole/IUserRoleRepository";
import TipoUsuario from "../../entity/TipoUsuario";

@injectable()
export default class UserRoleGetAllService {
  constructor(
    @inject("UserRoleRepository")
    private _userRoleRepository: IUserRolseRepository
  ) {}

  public async all(usuarioId: number): Promise<TipoUsuario[]> {
    return await this._userRoleRepository.all(usuarioId);
  }
}
