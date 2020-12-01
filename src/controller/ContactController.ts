import { Request, Response } from "express";
import { container } from "tsyringe";
import AppError from "../shared/AppError";

import ContactGetByIdService from "../services/contact/ContactGetByIdService";
import ContactSaveService from "../services/contact/ContactSaveService";
import { IErrorDTO } from "../repositories/dtos";

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
    try {
      const contactService = container.resolve(ContactSaveService);
      console.log(req.body)
      return res.status(201).send(await contactService.add(req.body));
    } catch (error) {
      const errorMessage = new AppError(error).error(true);
      return res.status(errorMessage.status || 400).send(errorMessage);
    }
  }
}
