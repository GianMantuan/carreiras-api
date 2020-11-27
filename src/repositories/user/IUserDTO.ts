import IRoleDTO from "../role/IRoleDTO";

export default interface IUserDTO {
  usuarioId?: number;
  login: string;
  senha: string;
  tipo: Array<IRoleDTO>
}
