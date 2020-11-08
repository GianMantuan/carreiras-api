import { injectable, inject } from "tsyringe";

import Certificado from "../../entity/Certificado";
import ICertificateRepository from "../../repositories/certificate/ICertificateRepository";

@injectable()
export default class CertificateGetByIdService {
  constructor(
    @inject("CertificateRepository")
    private _certificateRepository: ICertificateRepository
  ) {}

  public async getById(curriculoId: number): Promise<Certificado[]> {
    return await this._certificateRepository.getById(curriculoId);
  }
}
