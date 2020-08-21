import { injectable, inject } from "tsyringe";
import { Repository, getRepository } from "typeorm";
import TipoUsuario from "../entity/TipoUsuario";

interface IUserRole {
  tipoId: number;
}

@injectable()
export default class UserRoleService {
  constructor(
    @inject(TipoUsuario)
    private _userRoleRepository: Repository<TipoUsuario>
  ) {
    this._userRoleRepository = getRepository(TipoUsuario);
  }

  public async all(usuarioId: number): Promise<TipoUsuario[]> {
    return await this._userRoleRepository.find({ where: { usuarioId } });
  }

  public async add(
    usuarioId: number,
    userRoles: Array<IUserRole>
  ): Promise<TipoUsuario[]> {
    try {
      const roles = await this.all(usuarioId);

      if (roles.length > 0) {
        await this.delete(roles);
      }

      userRoles = userRoles.map((userRole) => ({ usuarioId, ...userRole }));
      console.log(userRoles);
      return await this._userRoleRepository.save(userRoles);
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
