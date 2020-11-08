import TipoUsuario from "../../entity/TipoUsuario";
import IUserRoleDTO from "./IUserRoleDTO";

export default interface IUserRolseRepository {
  all(usuarioId: number): Promise<TipoUsuario[]>;
  add(userRole: Array<IUserRoleDTO>): Promise<TipoUsuario[]>;
  delete(userRoles: Array<TipoUsuario>): Promise<TipoUsuario[]>;
}
