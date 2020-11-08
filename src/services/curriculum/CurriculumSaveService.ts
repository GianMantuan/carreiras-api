import { injectable, inject } from "tsyringe";

import Curriculo from "../../entity/Curriculo";

import ICurriculumDTO from "../../repositories/curriculum/ICurriculumDTO";
import ICurriculumRepository from "../../repositories/curriculum/ICurriculumRepository";

@injectable()
export default class CurriculumSaveRepository {
  constructor(
    @inject("CurriculumRepository")
    private _curriculumRepository: ICurriculumRepository
  ) {}

  public async add(curriculum: ICurriculumDTO): Promise<Curriculo> {
    return await this._curriculumRepository.add(curriculum);
  }
}
