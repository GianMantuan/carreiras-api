import Usuario from "../../entity/Usuario";
import IUserDTO from "./IUserDTO";

export default interface IUserRepository {
  all(): Promise<Usuario[]>;
  getId(id: number): Promise<Usuario>;
  getLogin(login: string): Promise<Usuario>;
  credential(data: IUserDTO): Promise<String>;
  add(user: IUserDTO): Promise<Usuario>;
  delete(usuarioId: number): Promise<Usuario>;
}
