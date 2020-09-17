import { injectable, inject } from "tsyringe";

import CurriculoVaga from "../../entity/CurriculoVaga";
import ICurriculumJobOfferRepository from "../../repositories/curriculumJobOffer/ICurriculumJobOfferRepository";

import { ICurriculumJobOfferDTO } from "../../repositories/dtos";

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
