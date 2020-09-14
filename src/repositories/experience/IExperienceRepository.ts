import Experiencia from "../../entity/Experiencia";
import { IExperienceDTO } from "../dtos";

export default interface IExperienceRepository {
  all(): Promise<Experiencia[]>;
  getById(curriculoId: number): Promise<Experiencia[]>;
  add(experience: IExperienceDTO): Promise<Experiencia>;
  delete(experienciaId: number): Promise<Experiencia>;
}
