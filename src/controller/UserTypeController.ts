import { Request, Response } from "express";
import { Repository, getRepository } from "typeorm";
import { container } from "tsyringe";
import { validate } from "class-validator";

import Usuario from "../entity/Usuario";
import TipoUsuario from "../entity/TipoUsuario";
import UserTypeService from "../services/UserTypeService";

export default class UserTypeController {
  public async getByUserId(req: Request, res: Response): Promise<Response> {
    const { usuarioId } = req.params;

    try {
      const userTypeService = container.resolve(UserTypeService);
      return res.status(200).send(await userTypeService.all(Number(usuarioId)));
    } catch (error) {
      return res.status(404).send("User not found");
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    const { usuarioId, tipoId } = req.body;

    try {
      const userTypeService = container.resolve(UserTypeService);
      return res
        .status(201)
        .send(await userTypeService.add({ usuarioId, tipoId }));
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  // public async update(req: Request, res: Response) {}

  public async remove(req: Request, res: Response) {
    try {
      const { usuarioId, tipoId } = req.params;
      const userTypeService = container.resolve(UserTypeService);

      await userTypeService.delete({ usuarioId, tipoId });
      res.status(204).send("UserType deleted");
    } catch (error) {
      console.log(error.message);
      res.status(404).send(error);
    }
  }
}
