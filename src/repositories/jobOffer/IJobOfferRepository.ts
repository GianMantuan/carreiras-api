import Vagas from "../../entity/Vagas";
import { IJobOfferDTO } from "../dtos";

export default interface IJobOfferRepository {
  all(): Promise<Vagas[]>;
  getById(curriculoId: number): Promise<Vagas[]>;
  add(vagas: IJobOfferDTO): Promise<Vagas>;
  delete(vagaId: number): Promise<Vagas>;
}
