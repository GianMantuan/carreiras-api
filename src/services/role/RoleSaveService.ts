import { injectable, inject } from "tsyringe";

import Tipo from "../../entity/Tipo";

import IRoleDTO from "../../repositories/role/IRoleDTO";
import IRoleRepository from "../../repositories/role/IRoleRepository";

@injectable()
export default class RoleSaveService {
  constructor(
    @inject("RoleRepository")
    private _roleRepository: IRoleRepository
  ) {}

  public async add(role: IRoleDTO): Promise<Tipo> {
    return await this._roleRepository.add(role);
  }
}
