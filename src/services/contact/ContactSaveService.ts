import { injectable, inject } from "tsyringe";

import Contato from "../../entity/Contato";
import IContactRepository from "../../repositories/contact/IContactRepository";

import { IContactDTO } from "../../repositories/dtos";

@injectable()
export default class ContactSaveService {
  constructor(
    @inject("ContactRepository")
    private _contactRepository: IContactRepository
  ) {}

  public async add(contact: IContactDTO): Promise<Contato> {
    return await this._contactRepository.add(contact);
  }
}
