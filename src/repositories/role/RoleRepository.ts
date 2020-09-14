import { Repository, getRepository } from "typeorm";

import Tipo from "../../entity/Tipo";
import IRoleRepository from "./IRoleRepository";

import { IRoleDTO } from "../dtos";

export default class RoleRepository implements IRoleRepository {
  private _roleRepository: Repository<Tipo>;

  constructor() {
    this._roleRepository = getRepository(Tipo);
  }

  public async all(): Promise<Tipo[]> {
    try {
      return await this._roleRepository.find({
        select: ["tipoId", "descricao"],
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  public async add(role: IRoleDTO): Promise<Tipo> {
    try {
      return await this._roleRepository.save(role);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  public async delete(tipoId: number): Promise<Tipo> {
    try {
      let type = await this._roleRepository.findOneOrFail({
        where: { tipoId },
      });

      return await this._roleRepository.remove(type);
    } catch (error) {
      throw new Error(error);
    }
  }
}
