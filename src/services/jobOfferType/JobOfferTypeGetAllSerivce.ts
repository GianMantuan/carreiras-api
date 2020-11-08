import { injectable, inject } from "tsyringe";

import TipoVaga from "../../entity/TipoVaga";
import IJobOfferTypeRepository from "../../repositories/jobOfferType/IJobOfferTypeRepository";

@injectable()
export default class JobOfferTypeGetAllService {
  constructor(
    @inject("JobOfferTypeRepository")
    private _jobOfferTypeRepository: IJobOfferTypeRepository
  ) {}

  public async all(): Promise<TipoVaga[]> {
    return await this._jobOfferTypeRepository.all();
  }
}
