import { getRepository, Repository } from "typeorm";

import Formacao from "../../entity/Formacao";

import IEducationDTO from "./IEducationDTO";
import IEducationRepository from "./IEducationRepository";

export default class EducationRepository implements IEducationRepository {
  private _educationRepository: Repository<Formacao>;

  constructor() {
    this._educationRepository = getRepository(Formacao);
  }

  public async all(): Promise<Formacao[]> {
    return await this._educationRepository.find();
  }

  public async getById(formacaoId: number): Promise<Formacao[]> {
    return await this._educationRepository.find({ where: { formacaoId } });
  }

  public async add(formacao: IEducationDTO): Promise<Formacao> {
    return await this._educationRepository.save(formacao);
  }

  public async delete(formacaoId: number): Promise<Formacao> {
    const education = await this._educationRepository.findOneOrFail({
      where: { formacaoId },
    });

    return await this._educationRepository.remove(education);
  }
}
