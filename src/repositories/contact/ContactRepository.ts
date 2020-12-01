import { Repository, getRepository } from "typeorm";

import Contato from "../../entity/Contato";

import IContactDTO from "./IContactDTO";
import IContactRepository from "./IContactRepository";

import Util from "../../utils";

export default class ContactRepository implements IContactRepository {
  private _contactRepository: Repository<Contato>;
  private _util: Util;

  constructor() {
    this._util = new Util();
    this._contactRepository = getRepository(Contato);
  }

  public async get(usuarioId: number): Promise<Contato | undefined> {
    return await this._contactRepository.findOne({
      where: { usuarioId },
    });
  }

  public async add(contact: IContactDTO) {
    if (contact.dataNascimento)
      contact.dataNascimento = this._util.dateConvert(contact.dataNascimento);
    console.log(contact)
    return await this._contactRepository.save(contact);
  }
}
