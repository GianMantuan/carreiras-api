import { Request, Response } from "express";
import { container } from "tsyringe";

import UserRoleService from "../services/UserRoleService";

export default class UserRoleController {
  public async getByUserId(req: Request, res: Response): Promise<Response> {
    const { usuarioId } = req.params;

    try {
      const userRoleService = container.resolve(UserRoleService);
      return res.status(200).send(await userRoleService.all(Number(usuarioId)));
    } catch (error) {
      return res.status(404).send("User not found");
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const userRoleService = container.resolve(UserRoleService);

      return res
        .status(201)
        .send(
          await userRoleService.add(Number(req.params.usuarioId), req.body)
        );
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  public async remove(req: Request, res: Response) {
    try {
      const userRoleService = container.resolve(UserRoleService);

      await userRoleService.delete(req.body.tipos);
      res.status(204).send("User Type Deleted");
    } catch (error) {
      console.log(error.message);
      res.status(404).send(error);
    }
  }
}
