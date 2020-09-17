import { Request, Response } from "express";
import { container } from "tsyringe";

import UserRoleSaveService from "../services/userRole/UserRoleSaveService";
import UserRoleGetAllService from "../services/userRole/UserRoleGetAllService";

export default class UserRoleController {
  public async getById(req: Request, res: Response): Promise<Response> {
    const { usuarioId } = req.params;

    try {
      const userRoleService = container.resolve(UserRoleGetAllService);
      return res.status(200).send(await userRoleService.all(Number(usuarioId)));
    } catch (error) {
      return res.status(404).send("User not found");
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    const userRoleService = container.resolve(UserRoleSaveService);

    try {
      return res.status(201).send(await userRoleService.add(req.body));
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}
