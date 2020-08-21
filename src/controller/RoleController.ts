import { Request, Response } from "express";
import { container } from "tsyringe";

import RoleService from "../services/RoleService";

export default class RoleController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const roleService = container.resolve(RoleService);
      return res.status(200).send(await roleService.all());
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const roleService = container.resolve(RoleService);

      await roleService.add(req.body);
      return res.status(201).send("Type created");
    } catch (error) {
      return res.status(409).send(error || error.message);
    }
  }

  public async remove(req: Request, res: Response): Promise<void> {
    try {
      const { tipoId } = req.params;
      const roleService = container.resolve(RoleService);

      res.status(204).send(await roleService.delete(Number(tipoId)));
    } catch (error) {
      console.log(error.message);
      res.status(404).send(error);
    }
  }
}
