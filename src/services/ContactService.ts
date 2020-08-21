import { injectable, inject, container } from "tsyringe";
import { Repository, getRepository } from "typeorm";
import Contato from "../entity/Contato";
import Util from "../utils";

interface IContact {
  usuarioId?: number;
  nome: string;
  email: string;
  telefoneResidencial?: string;
  telefoneComercial?: string;
  telefoneCelular: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  cidade: string;
  estado: string;
  dataNascimento: string;
  estadoCivil: string;
  nacionalidade: string;
}

@injectable()
export default class ContactService {
  private util: Util;

  constructor(
    @inject(Contato)
    private _contactRepository: Repository<Contato>
  ) {
    this.util = new Util();
    this._contactRepository = getRepository(Contato);
  }

  public async get(usuarioId: number): Promise<Contato | undefined> {
    try {
      return await this._contactRepository.findOne({ where: { usuarioId } });
    } catch (error) {
      throw new Error(error);
    }
  }

  public async add(usuarioId: number, contact: IContact) {
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
