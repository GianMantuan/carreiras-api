import { getRepository, Repository } from "typeorm";

import Certificado from "../../entity/Certificado";

import ICertificateDTO from "./ICertificateDTO";
import ICertificateRepository from "./ICertificateRepository";

export default class CertificateRepository implements ICertificateRepository {
  private _certificateRepository: Repository<Certificado>;

  constructor() {
    this._certificateRepository = getRepository(Certificado);
  }

  public async all(): Promise<Certificado[]> {
    return await this._certificateRepository.find();
  }

  public async getById(curriculoId: number): Promise<Certificado[]> {
    return await this._certificateRepository.find({ where: { curriculoId } });
  }

  public async add(experiencia: ICertificateDTO): Promise<Certificado> {
    return await this._certificateRepository.save(experiencia);
  }

  public async delete(experienciaId: number): Promise<Certificado> {
    const certificate = await this._certificateRepository.findOneOrFail({
      where: { experienciaId },
    });

    return await this._certificateRepository.remove(certificate);
  }
}
