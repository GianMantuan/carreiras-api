import { injectable, inject } from "tsyringe";

import Formacao from "../../entity/Formacao";
import IEducationRepository from "../../repositories/education/IEducationRepository";

@injectable()
export default class EducationDeleteService {
  constructor(
    @inject("EducationRepository")
    private _educationRepository: IEducationRepository
  ) {}

  public async delete(educationId: number): Promise<Formacao> {
    return await this._educationRepository.delete(educationId);
  }
}
