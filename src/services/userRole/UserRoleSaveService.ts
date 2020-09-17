import { injectable, inject } from "tsyringe";

import IUserRolseRepository from "../../repositories/userRole/IUserRoleRepository";
import TipoUsuario from "../../entity/TipoUsuario";

import { IUserRoleDTO } from "../../repositories/dtos";

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
