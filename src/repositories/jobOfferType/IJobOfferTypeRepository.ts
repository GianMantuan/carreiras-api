import TipoVaga from "../../entity/TipoVaga";
import IJobOfferTypeDTO from "./IJobOfferTypeDTO";

export default interface IJobOfferTypeRepository {
  all(): Promise<TipoVaga[]>;
  add(tipoVaga: IJobOfferTypeDTO): Promise<TipoVaga>;
  delete(tipoVagaId: number): Promise<TipoVaga>;
}
