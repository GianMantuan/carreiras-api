import { getRepository, Repository } from "typeorm";

import CurriculoVaga from "../../entity/CurriculoVaga";

import ICurriculumJobOfferDTO from "./ICurriculumJobOfferDTO";
// import IJobOfferDTO from "../jobOffer/IJobOfferDTO";
import ICurriculumJobOfferRepository from "./ICurriculumJobOfferRepository";

export default class CurriculumJobOfferRepository
  implements ICurriculumJobOfferRepository {
  private _curriculoJobOfferRepository: Repository<CurriculoVaga>;

  constructor() {
    this._curriculoJobOfferRepository = getRepository(CurriculoVaga);
  }

  public async getById(curriculoId: number): Promise<CurriculoVaga[]> {
    return await this._curriculoJobOfferRepository.find({
      join: {
        alias: "curriculo",
      },
    });
    // return await this._jobOfferRepository.find({
    //   relation: ["CurriculumJobOffer"]
    // });
  }

  public async add(
    curriculoVaga: ICurriculumJobOfferDTO
  ): Promise<CurriculoVaga> {
    return await this._curriculoJobOfferRepository.save(curriculoVaga);
  }

  public async delete(
    curriculoId: number,
    vagaId: number
  ): Promise<CurriculoVaga> {
    const curriculumJobOffer = await this._curriculoJobOfferRepository.findOneOrFail(
      {
        where: { vagaId, curriculoId },
      }
    );

    return await this._curriculoJobOfferRepository.remove(curriculumJobOffer);
  }
}
