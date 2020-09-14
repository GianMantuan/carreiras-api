import { injectable, inject } from "tsyringe";

import Experiencia from "../../entity/Experience";
import IExperienceRepository from "../../repositories/experience/IExperienceRepository";

import { IExperienceDTO } from "../../repositories/dtos";

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
