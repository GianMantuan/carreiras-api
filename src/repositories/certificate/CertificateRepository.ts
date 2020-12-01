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

  public async getById(certificadoId: number): Promise<Certificado[]> {
    return await this._certificateRepository.find({ where: { certificadoId } });
  }

  public async add(certificado: ICertificateDTO): Promise<Certificado> {
    console.log(certificado)
    return await this._certificateRepository.save(certificado);
  }

  public async delete(certificadoId: number): Promise<Certificado> {
    const certificate = await this._certificateRepository.findOneOrFail({
      where: { certificadoId },
    });

    return await this._certificateRepository.remove(certificate);
  }
}
