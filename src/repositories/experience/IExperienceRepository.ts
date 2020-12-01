import Experiencia from "../../entity/Experiencia";
import IExperienceDTO from "./IExperienceDTO";

export default interface IExperienceRepository {
  all(): Promise<Experiencia[]>;
  getById(experienciaId: number): Promise<Experiencia[]>;
  add(experience: IExperienceDTO): Promise<Experiencia>;
  delete(experienciaId: number): Promise<Experiencia>;
}
