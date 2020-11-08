import Usuario from "../../entity/Usuario";
import IUserDTO from "./IUserDTO";

export default interface IUserRepository {
  all(): Promise<Usuario[]>;
  get(login: string): Promise<Usuario>;
  credential(login: string): Promise<Usuario>;
  add(data: IUserDTO): Promise<Usuario>;
  delete(usuarioId: number): Promise<Usuario>;
}
