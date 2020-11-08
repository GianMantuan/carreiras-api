import { injectable, inject } from "tsyringe";

import Formacao from "../../entity/Formacao";
import IEducationRepository from "../../repositories/education/IEducationRepository";

@injectable()
export default class EducationGetByIdService {
  constructor(
    @inject("EducationRepository")
    private _educationRepository: IEducationRepository
  ) {}

  public async getById(curriculoId: number): Promise<Formacao[]> {
    return await this._educationRepository.getById(curriculoId);
  }
}
