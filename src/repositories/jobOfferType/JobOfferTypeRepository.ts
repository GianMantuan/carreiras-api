import { getRepository, Repository } from "typeorm";

import TipoVaga from "../../entity/TipoVaga";

import IJobOfferTypeDTO from "./IJobOfferTypeDTO";
import IJobOfferTypeRepository from "./IJobOfferTypeRepository";

export default class JobOfferTypeRepository implements IJobOfferTypeRepository {
  private _jobOfferTypeRepository: Repository<TipoVaga>;

  constructor() {
    this._jobOfferTypeRepository = getRepository(TipoVaga);
  }

  public async all(): Promise<TipoVaga[]> {
    return await this._jobOfferTypeRepository.find();
  }

  public async add(tipoVaga: IJobOfferTypeDTO): Promise<TipoVaga> {
    return await this._jobOfferTypeRepository.save(tipoVaga);
  }

  public async delete(tipoVagaId: number): Promise<TipoVaga> {
    const jobOfferType = await this._jobOfferTypeRepository.findOneOrFail({
      where: { tipoVagaId },
    });

    return await this._jobOfferTypeRepository.remove(jobOfferType);
  }
}
