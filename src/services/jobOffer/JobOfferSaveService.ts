import { injectable, inject } from "tsyringe";

import Vagas from "../../entity/Vagas";
import IJobOfferRepository from "../../repositories/jobOffer/IJobOfferRepository";

import { IJobOfferDTO } from "../../repositories/dtos";

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
