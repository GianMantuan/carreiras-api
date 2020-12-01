import Curriculo from "../../entity/Curriculo";
import ICurriculumDTO from "./ICurriculumDTO";

export default interface ICurriculumRepository {
  get(usuarioId: number): Promise<Curriculo>;
  add(curriculum: ICurriculumDTO): Promise<Curriculo>;
}
