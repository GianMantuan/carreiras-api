import TipoUsuario from "../../entity/TipoUsuario";
import { IUserRoleDTO } from "../dtos";

export default interface IUserRolseRepository {
  all(usuarioId: number): Promise<TipoUsuario[]>;
  add(usuarioId: number, data: Array<IUserRoleDTO>): Promise<TipoUsuario[]>;
  delete(userRoles: Array<TipoUsuario>): Promise<TipoUsuario[]>;
}
