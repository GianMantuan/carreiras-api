import { getRepository, Repository } from "typeorm";

import Experiencia from "../../entity/Experiencia";

import IExperienceDTO from "./IExperienceDTO";
import IExperienceRepository from "./IExperienceRepository";

export default class ExperienceRepository implements IExperienceRepository {
  private _experienceRepository: Repository<Experiencia>;

  constructor() {
    this._experienceRepository = getRepository(Experiencia);
  }

  public async all(): Promise<Experiencia[]> {
    return await this._experienceRepository.find();
  }

  public async getById(curriculoId: number): Promise<Experiencia[]> {
    return await this._experienceRepository.find({ where: { curriculoId } });
  }

  public async add(experiencia: IExperienceDTO): Promise<Experiencia> {
    return await this._experienceRepository.save(experiencia);
  }

  public async delete(experienciaId: number): Promise<Experiencia> {
    const experience = await this._experienceRepository.findOneOrFail({
      where: { experienciaId },
    });

    return await this._experienceRepository.remove(experience);
  }
}
