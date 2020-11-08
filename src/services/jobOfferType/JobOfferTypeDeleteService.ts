import { injectable, inject } from "tsyringe";

import TipoVaga from "../../entity/TipoVaga";
import IJobOfferTypeRepository from "../../repositories/jobOfferType/IJobOfferTypeRepository";

@injectable()
export default class JobOfferTypeDeleteService {
  constructor(
    @inject("JobOfferTypeRepository")
    private _jobOfferTypeRepository: IJobOfferTypeRepository
  ) {}

  public async delete(tipoVagaId: number): Promise<TipoVaga> {
    return await this._jobOfferTypeRepository.delete(tipoVagaId);
  }
}
