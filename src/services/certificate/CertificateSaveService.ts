import { injectable, inject } from "tsyringe";

import Certificado from "../../entity/Certificado";
import ICertificateRepository from "../../repositories/certificate/ICertificateRepository";

import { ICertificateDTO } from "../../repositories/dtos";

@injectable()
export default class CertificateSaveService {
  constructor(
    @inject("CertificateRepository")
    private _certificateRepository: ICertificateRepository
  ) {}

  public async add(certificate: ICertificateDTO): Promise<Certificado> {
    return await this._certificateRepository.add(certificate);
  }
}
