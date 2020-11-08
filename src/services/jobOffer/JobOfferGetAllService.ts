import { injectable, inject } from "tsyringe";

import Vagas from "../../entity/Vagas";
import IJobOfferRepository from "../../repositories/jobOffer/IJobOfferRepository";

@injectable()
export default class JobOfferGetAllService {
  constructor(
    @inject("JobOfferRepository")
    private _jobOfferRepository: IJobOfferRepository
  ) {}

  public async all(): Promise<Vagas[]> {
    return await this._jobOfferRepository.all();
  }
}
