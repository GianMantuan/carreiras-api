import { injectable, inject } from "tsyringe";

import ICurriculumRepository from "../../repositories/curriculum/ICurriculumRepository";
import Curriculo from "../../entity/Curriculo";
import { ICurriculumDTO } from "../../repositories/dtos";

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
