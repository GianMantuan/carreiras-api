import Vagas from "../../entity/Vagas";
import IJobOfferDTO from "./IJobOfferDTO";

export default interface IJobOfferRepository {
  all(): Promise<Vagas[]>;
  getCurriculumJob(): Promise<Vagas[]>;
  getById(curriculoId: number): Promise<Vagas[]>;
  add(vagas: IJobOfferDTO): Promise<Vagas>;
  delete(vagaId: number): Promise<Vagas>;
}
