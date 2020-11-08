import { injectable, inject } from "tsyringe";

import Certificado from "../../entity/Certificado";
import ICertificateRepository from "../../repositories/certificate/ICertificateRepository";

@injectable()
export default class CertificateGetAllService {
  constructor(
    @inject("CertificateRepository")
    private _certificateRepository: ICertificateRepository
  ) {}

  public async all(): Promise<Certificado[]> {
    return await this._certificateRepository.all();
  }
}
