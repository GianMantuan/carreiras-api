import { injectable, inject } from "tsyringe";

import Experiencia from "../../entity/Experiencia";
import IExperienceRepository from "../../repositories/experience/IExperienceRepository";

@injectable()
export default class ExperienceDeleteService {
  constructor(
    @inject("ExperienceRepository")
    private _experienceRepository: IExperienceRepository
  ) {}

  public async delete(experienceId: number): Promise<Experiencia> {
    return await this._experienceRepository.delete(experienceId);
  }
}
