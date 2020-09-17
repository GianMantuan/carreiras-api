import { injectable, inject } from "tsyringe";

import Formacao from "../../entity/Formacao";
import IEducationRepository from "../../repositories/education/IEducationRepository";

import { IEducationDTO } from "../../repositories/dtos";

@injectable()
export default class EducationSaveService {
  constructor(
    @inject("EducationRepository")
    private _educationRepository: IEducationRepository
  ) {}

  public async add(education: IEducationDTO): Promise<Formacao> {
    return await this._educationRepository.add(education);
  }
}
