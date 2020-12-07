import { getRepository, Repository } from "typeorm";

import Vaga from "../../entity/Vagas";

import IJobOfferDTO from "./IJobOfferDTO";
import IJobOfferRepository from "./IJobOfferRepository";

export default class JobOfferRepository implements IJobOfferRepository {
  private _jobOfferRepository: Repository<Vaga>;

  constructor() {
    this._jobOfferRepository = getRepository(Vaga);
  }

  public async all(): Promise<Vaga[]> {
    return await this._jobOfferRepository.find();
  }

  public async getCurriculumJob(): Promise<Vaga[]> {
    return await this._jobOfferRepository.find({
      relations: ["curriculoVaga"]
    })
  }

  public async getById(curriculoId: number): Promise<Vaga[]> {
    return await this._jobOfferRepository.find({where: {curriculoId}});
  }

  public async add(vagas: IJobOfferDTO): Promise<Vaga> {
    return await this._jobOfferRepository.save(vagas);
  }

  public async delete(vagaId: number): Promise<Vaga> {
    const jobOffer = await this._jobOfferRepository.findOneOrFail({
      where: { vagaId },
    });

    return await this._jobOfferRepository.remove(jobOffer);
  }
}
