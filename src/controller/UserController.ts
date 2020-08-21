import { Request, Response } from "express";
import { container } from "tsyringe";

import UserService from "../services/UserService";

export default class UserController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const userService = container.resolve(UserService);
      return res.status(200).send(await userService.all());
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  public async getByLogin(req: Request, res: Response): Promise<Response> {
    const { login } = req.params;

    try {
      const userService = container.resolve(UserService);

      return res.status(200).send(await userService.get(login));
    } catch (error) {
      return res.status(404).send("User not found");
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    const { login, senha, tipoId } = req.body;

    try {
      const userService = container.resolve(UserService);

      await userService.add({ login, senha, tipoId });
      return res.status(201).send("User created");
    } catch (error) {
      return res.status(409).send(error || error.message);
    }
  }

  // public async update(req: Request, res: Response) {}

  public async remove(req: Request, res: Response): Promise<void> {
    try {
      const { usuarioId } = req.params;
      console.log(usuarioId);
      const userService = container.resolve(UserService);

      res.status(204).send(await userService.delete(Number(usuarioId)));
    } catch (error) {
      console.log(error.message);
      res.status(404).send(error);
    }
  }
}
