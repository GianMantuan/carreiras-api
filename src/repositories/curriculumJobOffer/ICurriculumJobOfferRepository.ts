import CurriculoVaga from "../../entity/CurriculoVaga";

import ICurriculumJobOfferDTO from "./ICurriculumJobOfferDTO";

export default interface ICurriculumJobOfferRepository {
  all(): Promise<CurriculoVaga[]>;
  getById(curriculoId: number): Promise<CurriculoVaga[]>;
  add(curriculoVaga: ICurriculumJobOfferDTO): Promise<CurriculoVaga>;
  delete(curriculoId: number, vagaId: number): Promise<CurriculoVaga>;
}
