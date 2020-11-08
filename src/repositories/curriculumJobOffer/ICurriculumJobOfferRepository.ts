import CurriculoVaga from "../../entity/CurriculoVaga";

import ICurriculumJobOfferDTO from "./ICurriculumJobOfferDTO";

export default interface ICurriculumJobOfferRepository {
  getById(curriculoId: number): Promise<CurriculoVaga[]>;
  add(curriculoVaga: ICurriculumJobOfferDTO): Promise<CurriculoVaga>;
  delete(curriculoId: number, vagaId: number): Promise<CurriculoVaga>;
}
