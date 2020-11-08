import { injectable, inject } from "tsyringe";

import TipoVaga from "../../entity/TipoVaga";

import IJobOfferTypeDTO from "../../repositories/jobOfferType/IJobOfferTypeDTO";
import IJobOfferTypeRepository from "../../repositories/jobOfferType/IJobOfferTypeRepository";

@injectable()
export default class JobOfferTypeSaveService {
  constructor(
    @inject("JobOfferTypeRepository")
    private _jobOfferTypeRepository: IJobOfferTypeRepository
  ) {}

  public async add(tipoVaga: IJobOfferTypeDTO): Promise<TipoVaga> {
    return await this._jobOfferTypeRepository.add(tipoVaga);
  }
}
