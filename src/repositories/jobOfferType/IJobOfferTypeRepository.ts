import TipoVaga from "../../entity/TipoVaga";
import { IJobOfferTypeDTO } from "../dtos";

export default interface IJobOfferTypeRepository {
  all(): Promise<TipoVaga[]>;
  add(tipoVaga: IJobOfferTypeDTO): Promise<TipoVaga>;
  delete(tipoVagaId: number): Promise<TipoVaga>;
}
