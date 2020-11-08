import { injectable, inject } from "tsyringe";

import Experiencia from "../../entity/Experiencia";

import IExperienceDTO from "../../repositories/experience/IExperienceDTO";
import IExperienceRepository from "../../repositories/experience/IExperienceRepository";

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
