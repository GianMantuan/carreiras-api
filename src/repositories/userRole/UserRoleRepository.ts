import { Repository, getRepository } from "typeorm";

import TipoUsuario from "../../entity/TipoUsuario";

import IUserRoleDTO from "./IUserRoleDTO";
import IUserRolseRepository from "./IUserRoleRepository";

export default class UserRoleRepository implements IUserRolseRepository {
  private _userRoleRepository: Repository<TipoUsuario>;

  constructor() {
    this._userRoleRepository = getRepository(TipoUsuario);
  }

  public async all(usuarioId: number): Promise<TipoUsuario[]> {
    return await this._userRoleRepository.find({ where: { usuarioId } });
  }

  public async add(userRole: Array<IUserRoleDTO>): Promise<TipoUsuario[]> {
    try {
      const roles = await this.all(userRole[0].usuarioId);

      if (roles.length > 0) {
        await this.delete(roles);
      }

      return await this._userRoleRepository.save(userRole);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async delete(userRoles: Array<TipoUsuario>): Promise<TipoUsuario[]> {
    try {
      return await this._userRoleRepository.remove(userRoles);
    } catch (error) {
      throw new Error(error);
    }
  }
}
