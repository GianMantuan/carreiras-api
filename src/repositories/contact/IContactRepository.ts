import Contato from "../../entity/Contato";
import { IContactDTO } from "../dtos";

export default interface IContactRepository {
  get(usuarioId: number): Promise<Contato | undefined>;
  add(usuarioId: number, data: IContactDTO): Promise<Contato>;
}
