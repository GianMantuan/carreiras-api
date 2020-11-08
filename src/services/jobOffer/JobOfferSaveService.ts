import { injectable, inject } from "tsyringe";

import Vagas from "../../entity/Vagas";

import IJobOfferDTO from "../../repositories/jobOffer/IJobOfferDTO";
import IJobOfferRepository from "../../repositories/jobOffer/IJobOfferRepository";

@injectable()
export default class JobOfferSaveService {
  constructor(
    @inject("JobOfferRepository")
    private _jobOfferRepository: IJobOfferRepository
  ) {}

  public async add(vagas: IJobOfferDTO): Promise<Vagas> {
    return await this._jobOfferRepository.add(vagas);
  }
}
