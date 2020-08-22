import Tipo from "../../entity/Tipo";
import { IRoleDTO } from "../dtos";

export default interface IRoleRepository {
  all(): Promise<Tipo[]>;
  add(data: IRoleDTO): Promise<Tipo>;
  delete(tipoId: number): Promise<Tipo>;
}
