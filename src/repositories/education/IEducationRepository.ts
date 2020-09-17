import Formacao from "../../entity/Formacao";
import { IEducationDTO } from "../dtos";

export default interface ICertificateRepository {
  all(): Promise<Formacao[]>;
  getById(curriculoId: number): Promise<Formacao[]>;
  add(education: IEducationDTO): Promise<Formacao>;
  delete(formacaoId: number): Promise<Formacao>;
}
