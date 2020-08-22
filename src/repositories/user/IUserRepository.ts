import Usuario from "../../entity/Usuario";
import { IUserDTO } from "../dtos";

export default interface IUserRepository {
  all(): Promise<Usuario[]>;
  get(login: string): Promise<Usuario | undefined>;
  add(data: IUserDTO): Promise<Usuario>;
  delete(usuarioId: number): Promise<Usuario>;
}
