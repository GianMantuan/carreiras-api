import { injectable, inject } from "tsyringe";

import Tipo from "../../entity/Tipo";
import IRoleRepository from "../../repositories/role/IRoleRepository";

@injectable()
export default class RoleGetAllService {
  constructor(
    @inject("RoleRepository")
    private _roleRepository: IRoleRepository
  ) {}

  public async all(): Promise<Tipo[]> {
    return await this._roleRepository.all();
  }
}
