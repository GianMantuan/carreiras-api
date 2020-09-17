import { injectable, inject } from "tsyringe";

import Experiencia from "../../entity/Experiencia";
import IExperienceRepository from "../../repositories/experience/IExperienceRepository";

import { IExperienceDTO } from "../../repositories/dtos";

@injectable()
export default class ExperienceSaveService {
  constructor(
    @inject("ExperienceRepository")
    private _experienceRepository: IExperienceRepository
  ) {}

  public async add(experience: IExperienceDTO): Promise<Experiencia> {
    return await this._experienceRepository.add(experience);
  }
}
