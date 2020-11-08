import { injectable, inject } from "tsyringe";

import TipoUsuario from "../../entity/TipoUsuario";

import IUserRoleDTO from "../../repositories/userRole/IUserRoleDTO";
import IUserRolseRepository from "../../repositories/userRole/IUserRoleRepository";

@injectable()
export default class UserRoleSaveService {
  constructor(
    @inject("UserRoleRepository")
    private _userRoleRepository: IUserRolseRepository
  ) {}

  public async add(userRole: Array<IUserRoleDTO>): Promise<TipoUsuario[]> {
    return await this._userRoleRepository.add(userRole);
  }
}
