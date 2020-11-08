import { injectable, inject } from "tsyringe";

import Certificado from "../../entity/Certificado";
import ICertificateRepository from "../../repositories/certificate/ICertificateRepository";

@injectable()
export default class CertificateDeleteService {
  constructor(
    @inject("CertificateRepository")
    private _certificateRepository: ICertificateRepository
  ) {}

  public async delete(certificateId: number): Promise<Certificado> {
    return await this._certificateRepository.delete(certificateId);
  }
}
