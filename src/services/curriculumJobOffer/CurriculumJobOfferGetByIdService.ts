import { injectable, inject } from "tsyringe";
import CurriculoVaga from "../../entity/CurriculoVaga";

import Vagas from "../../entity/Vagas";
import ICurriculumJobOfferRepository from "../../repositories/curriculumJobOffer/ICurriculumJobOfferRepository";

@injectable()
export default class CurriculumJobOfferGetByIdService {
  constructor(
    @inject("CurriculumJobOfferRepository")
    private _curriculumJobOfferRepository: ICurriculumJobOfferRepository
  ) {}

  public async getById(curriculoId: number): Promise<CurriculoVaga[]> {
    return await this._curriculumJobOfferRepository.getById(curriculoId);
  }
}
