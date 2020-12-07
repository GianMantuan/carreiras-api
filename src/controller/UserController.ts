import { Request, Response } from "express";
import { container } from "tsyringe";

import UserGetAllService from "../services/user/UserGetAllService";

import UserGetByLoginService from "../services/user/UserGetByLoginService";
import UserGetByIdService from "../services/user/UserGetByIdService";
import UserSaveService from "../services/user/UserSaveService";
import UserDeleteService from "../services/user/UserDeleteService";
import AppError from "../shared/AppError";

export default class UserController {
  public async all(req: Request, res: Response): Promise<Response> {
    try {
      const userService = container.resolve(UserGetAllService);
      return res.status(200).send(await userService.all());
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { usuarioId } = req.params;

    try {
      const userService = container.resolve(UserGetByIdService);
      return res.status(200).send(await userService.getId(Number(usuarioId)));
    } catch (error) {
      const errorMessage = new AppError(error).error();
      return res
        .status(errorMessage.status || 404)
        .json(errorMessage.message || "Usuário não encotrado");
    }
  }

  public async getByLogin(req: Request, res: Response): Promise<Response> {
    const { login } = req.params;

    try {
      const userService = container.resolve(UserGetByLoginService);
      return res.status(200).send(await userService.getLogin(login));
    } catch (error) {
      const errorMessage = new AppError(error).error();
      return res
        .status(errorMessage.status || 404)
        .json(errorMessage.message || "Usuário não encotrado");
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const userService = container.resolve(UserSaveService);
      return res.status(201).send(await userService.add(req.body));
    } catch (error) {
      const errorMessage = new AppError(error).error(true);
      return res.status(errorMessage.status || 409).send(errorMessage);
    }
  }

  public async remove(req: Request, res: Response): Promise<Response> {
    const { usuarioId } = req.params;

    try {
      const userService = container.resolve(UserDeleteService);
      return res.status(204).send(await userService.delete(Number(usuarioId)));
    } catch (error) {
      const errorMessage = new AppError(error).error(true);
      return res.status(errorMessage.status || 400).send(errorMessage);
    }
  }
}
