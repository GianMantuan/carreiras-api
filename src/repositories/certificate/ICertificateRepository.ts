import Certificado from "../../entity/Certificado";
import { ICertificateDTO } from "../dtos";

export default interface IEducationRepository {
  all(): Promise<Certificado[]>;
  getById(curriculoId: number): Promise<Certificado[]>;
  add(certificate: ICertificateDTO): Promise<Certificado>;
  delete(certificadoId: number): Promise<Certificado>;
}
