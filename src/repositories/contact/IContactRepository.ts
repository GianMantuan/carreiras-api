import Contato from "../../entity/Contato";
import IContactDTO from "./IContactDTO";

export default interface IContactRepository {
  get(usuarioId: number): Promise<Contato | undefined>;
  add(data: IContactDTO): Promise<Contato>;
}
