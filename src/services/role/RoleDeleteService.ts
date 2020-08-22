import { injectable, inject } from "tsyringe";

import Tipo from "../../entity/Tipo";
import IRoleRepository from "../../repositories/role/IRoleRepository";

@injectable()
export default class RoleDeleteService {
  constructor(
    @inject("RoleRepository")
    private _roleRepository: IRoleRepository
  ) {}

  public async delete(tipoId: number): Promise<Tipo> {
    return await this._roleRepository.delete(tipoId);
  }
}
