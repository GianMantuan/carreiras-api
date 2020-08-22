import { Request, Response } from "express";
import { container } from "tsyringe";

import UserGetAllService from "../services/user/UserGetAllService";
import UserGetByIdService from "../services/user/UserGetByIdService";
import UserSaveService from "../services/user/UserSaveService";
import UserDeleteService from "../services/user/UserDeleteService";

export default class UserController {
  public async all(req: Request, res: Response): Promise<Response> {
    try {
      const userService = container.resolve(UserGetAllService);
      return res.status(200).send(await userService.all());
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  public async getByLogin(req: Request, res: Response): Promise<Response> {
    const { login } = req.params;

    try {
      const userService = container.resolve(UserGetByIdService);
      return res.status(200).send(await userService.get(login));
    } catch (error) {
      return res.status(404).send("User not found");
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    const { login, senha } = req.body;

    try {
      const userService = container.resolve(UserSaveService);
      return res.status(201).send(await userService.add({ login, senha }));
    } catch (error) {
      return res.status(409).send(error || error.message);
    }
  }

  public async remove(req: Request, res: Response): Promise<void> {
    const { usuarioId } = req.params;

    try {
      const userService = container.resolve(UserDeleteService);
      res.status(204).send(await userService.delete(Number(usuarioId)));
    } catch (error) {
      console.log(error.message);
      res.status(404).send(error);
    }
  }
}
