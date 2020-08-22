import { Request, Response } from "express";
import { container } from "tsyringe";

import ContactGetByIdService from "../services/contact/ContactGetByIdService";
import ContactSaveService from "../services/contact/ContactSaveService";

export default class ContactController {
  public async getById(req: Request, res: Response): Promise<Response> {
    const { usuarioId } = req.params;

    try {
      const contactService = container.resolve(ContactGetByIdService);
      return res.status(200).send(await contactService.get(Number(usuarioId)));
    } catch (error) {
      return res.status(404).send("User Contact not found");
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    const contactService = container.resolve(ContactSaveService);

    try {
      await contactService.add(Number(req.params.usuarioId), req.body);
      return res.status(201).send("User Contact created");
    } catch (error) {
      return res.status(409).send(error || error.message);
    }
  }
}
