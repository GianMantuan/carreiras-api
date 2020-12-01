import Formacao from "../../entity/Formacao";
import IEducationDTO from "./IEducationDTO";

export default interface ICertificateRepository {
  all(): Promise<Formacao[]>;
  getById(formacaoId: number): Promise<Formacao[]>;
  add(education: IEducationDTO): Promise<Formacao>;
  delete(formacaoId: number): Promise<Formacao>;
}
