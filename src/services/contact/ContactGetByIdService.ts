import { injectable, inject } from "tsyringe";

import IContactRepository from "../../repositories/contact/IContactRepository";
import Contato from "../../entity/Contato";

@injectable()
export default class ContactGetByIdService {
  constructor(
    @inject("ContactRepository")
    private _contactRepository: IContactRepository
  ) {}

  public async get(usuarioId: number): Promise<Contato | undefined> {
    return await this._contactRepository.get(usuarioId);
  }
}
