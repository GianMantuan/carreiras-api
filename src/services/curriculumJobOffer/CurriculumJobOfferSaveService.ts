import { injectable, inject } from "tsyringe";

import CurriculoVaga from "../../entity/CurriculoVaga";

import ICurriculumJobOfferDTO from "../../repositories/curriculumJobOffer/ICurriculumJobOfferDTO";
import ICurriculumJobOfferRepository from "../../repositories/curriculumJobOffer/ICurriculumJobOfferRepository";

@injectable()
export default class CurriculumJobOfferSaveService {
  constructor(
    @inject("CurriculumJobOfferRepository")
    private _curriculumJobOfferRepository: ICurriculumJobOfferRepository
  ) {}

  public async add(
    curriculoVaga: ICurriculumJobOfferDTO
  ): Promise<CurriculoVaga> {
    return await this._curriculumJobOfferRepository.add(curriculoVaga);
  }
}
