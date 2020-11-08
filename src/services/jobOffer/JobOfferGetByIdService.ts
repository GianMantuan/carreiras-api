import { injectable, inject } from "tsyringe";

import Vagas from "../../entity/Vagas";
import IJobOfferRepository from "../../repositories/jobOffer/IJobOfferRepository";

@injectable()
export default class JobOfferGetByIdService {
  constructor(
    @inject("JobOfferRepository")
    private _jobOfferRepository: IJobOfferRepository
  ) {}

  public async getById(curriculoId: number): Promise<Vagas[]> {
    return await this._jobOfferRepository.getById(curriculoId);
  }
}
