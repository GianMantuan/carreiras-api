import { Request, Response } from "express";
import { container } from "tsyringe";

import RoleGetAllService from "../services/role/RoleGetAllService";
import RoleSaveService from "../services/role/RoleSaveService";
import UserDeleteService from "../services/user/UserDeleteService";

export default class RoleController {
  public async all(req: Request, res: Response): Promise<Response> {
    try {
      const roleService = container.resolve(RoleGetAllService);
      return res.status(200).send(await roleService.all());
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const roleService = container.resolve(RoleSaveService);
      return res.status(201).send(await roleService.add(req.body));
    } catch (error) {
      return res.status(409).send(error || error.message);
    }
  }

  public async remove(req: Request, res: Response): Promise<void> {
    const { tipoId } = req.params;

    try {
      const roleService = container.resolve(UserDeleteService);
      res.status(204).send(await roleService.delete(Number(tipoId)));
    } catch (error) {
      console.log(error.message);
      res.status(404).send(error);
    }
  }
}
