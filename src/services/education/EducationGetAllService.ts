import { injectable, inject } from "tsyringe";

import Formacao from "../../entity/Formacao";
import IEducationRepository from "../../repositories/education/IEducationRepository";

@injectable()
export default class EducationGetAllService {
  constructor(
    @inject("EducationRepository")
    private _educationRepository: IEducationRepository
  ) {}

  public async all(): Promise<Formacao[]> {
    return await this._educationRepository.all();
  }
}
