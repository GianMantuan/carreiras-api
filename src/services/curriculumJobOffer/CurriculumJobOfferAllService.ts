import { injectable, inject } from "tsyringe";
import CurriculoVaga from "../../entity/CurriculoVaga";

import ICurriculumJobOfferRepository from "../../repositories/curriculumJobOffer/ICurriculumJobOfferRepository";

@injectable()
export default class CurriculumJobOfferAllService {
  constructor(
    @inject("CurriculumJobOfferRepository")
    private _curriculumJobOfferRepository: ICurriculumJobOfferRepository
  ) {}

  public async all(): Promise<CurriculoVaga[]> {
    return await this._curriculumJobOfferRepository.all();
  }
}
