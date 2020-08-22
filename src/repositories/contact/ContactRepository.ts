import { Repository, getRepository } from "typeorm";

import Contato from "../../entity/Contato";
import IContactRepository from "./IContactRepository";

import Util from "../../utils";
import { IContactDTO } from "../dtos";

export default class ContactRepository implements IContactRepository {
  private _contactRepository: Repository<Contato>;
  private util: Util;

  constructor() {
    this.util = new Util();
    this._contactRepository = getRepository(Contato);
  }

  public async get(usuarioId: number): Promise<Contato | undefined> {
    try {
      return await this._contactRepository.findOne({
        where: { usuarioId },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  public async add(usuarioId: number, contact: IContactDTO) {
    try {
      const userContact = await this.get(usuarioId);

      contact.dataNascimento = this.util.dateConvert(contact.dataNascimento);
      contact.usuarioId = usuarioId;

      if (userContact) {
        Object.assign(userContact, contact);
        return await this._contactRepository.save(userContact);
      }

      return await this._contactRepository.save(contact);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
