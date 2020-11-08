import { injectable, inject } from "tsyringe";

import ICurriculumRepository from "../../repositories/curriculum/ICurriculumRepository";
import Curriculo from "../../entity/Curriculo";

@injectable()
export default class CurriculumGetByIdService {
  constructor(
    @inject("CurriculumRepository")
    private _curriculumRepository: ICurriculumRepository
  ) {}

  public async get(usuarioId: number): Promise<Curriculo | undefined> {
    return await this._curriculumRepository.get(usuarioId);
  }
}
