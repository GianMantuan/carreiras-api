import { injectable, inject } from "tsyringe";

import Vagas from "../../entity/Vagas";
import IJobOfferRepository from "../../repositories/jobOffer/IJobOfferRepository";

@injectable()
export default class JobOfferDeleteService {
  constructor(
    @inject("JobOfferRepository")
    private _jobOfferRepository: IJobOfferRepository
  ) {}

  public async delete(vagaId: number): Promise<Vagas> {
    return await this._jobOfferRepository.delete(vagaId);
  }
}
