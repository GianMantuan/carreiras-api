import { injectable, inject } from "tsyringe";

import Experiencia from "../../entity/Experiencia";
import IExperienceRepository from "../../repositories/experience/IExperienceRepository";

import { IExperienceDTO } from "../../repositories/dtos";

@injectable()
export default class ExperienceGetAllService {
  constructor(
    @inject("ExperienceRepository")
    private _experienceRepository: IExperienceRepository
  ) {}

  public async all(): Promise<Experiencia[]> {
    return await this._experienceRepository.all();
  }
}
