import { injectable, inject, container } from "tsyringe";
import { Repository, getRepository } from "typeorm";
import Tipo from "../entity/Tipo";

interface IRole {
  tipoId?: number;
  descricao: string;
}
@injectable()
export default class RoleService {
  constructor(
    @inject(Tipo)
    private _roleRepository: Repository<Tipo>
  ) {
    this._roleRepository = getRepository(Tipo);
  }

  public async all(): Promise<Tipo[]> {
    try {
      return await this._roleRepository.find({
        select: ["tipoId", "descricao"],
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  public async add(role: IRole): Promise<Tipo> {
    try {
      if (role.tipoId) {
        let type = await this._roleRepository.findOne({
          where: { tipoId: role.tipoId },
        });
        Object.assign(type, role);
      }

      return await this._roleRepository.save(role);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  public async delete(tipoId: number): Promise<Tipo> {
    try {
      let type = await this._roleRepository.findOneOrFail({
        where: { tipoId },
      });

      return await this._roleRepository.remove(type);
    } catch (error) {
      throw new Error(error);
    }
  }
}
