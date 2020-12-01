import Certificado from "../../entity/Certificado";
import ICertificateDTO from "./ICertificateDTO";

export default interface IEducationRepository {
  all(): Promise<Certificado[]>;
  getById(certificadoId: number): Promise<Certificado[]>;
  add(certificate: ICertificateDTO): Promise<Certificado>;
  delete(certificadoId: number): Promise<Certificado>;
}
