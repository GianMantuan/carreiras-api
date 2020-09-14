import { injectable, inject } from "tsyringe";

import TipoVaga from "../../entity/TipoVaga";
import IJobOfferTypeRepository from "../../repositories/jobOfferType/IJobOfferTypeRepository";

import { IJobOfferTypeDTO } from "../../repositories/dtos";

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
