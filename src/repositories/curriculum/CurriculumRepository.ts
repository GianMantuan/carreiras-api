import { Repository, getRepository } from "typeorm";

import Curriculo from "../../entity/Curriculo";

import ICurriculumDTO from "./ICurriculumDTO";
import ICurriculumRepository from "./ICurriculumRepository";

export default class CurriculumRepository implements ICurriculumRepository {
  private _curriculumRepository: Repository<Curriculo>;

  constructor() {
    this._curriculumRepository = getRepository(Curriculo);
  }

  public async get(curriculoId: number): Promise<Curriculo> {
    return await this._curriculumRepository.findOneOrFail({
      relations: ["experiencia", "formacao", "certificado"],
      where: { curriculoId },
    });
  }

  public async add(curriculum: ICurriculumDTO): Promise<Curriculo> {
    return await this._curriculumRepository.save(curriculum);
  }
}
