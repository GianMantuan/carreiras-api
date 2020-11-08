import { injectable, inject } from "tsyringe";

import CurriculoVaga from "../../entity/CurriculoVaga";
import ICurriculumJobOfferRepository from "../../repositories/curriculumJobOffer/ICurriculumJobOfferRepository";

@injectable()
export default class CurriculumJobOfferDeleteService {
  constructor(
    @inject("CurriculumJobOfferRepository")
    private _curriculumJobOfferRepository: ICurriculumJobOfferRepository
  ) {}

  public async delete(
    curriculoId: number,
    vagaId: number
  ): Promise<CurriculoVaga> {
    return await this._curriculumJobOfferRepository.delete(curriculoId, vagaId);
  }
}
