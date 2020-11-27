import { Request, Response } from "express";
import { container } from "tsyringe";

import AuthLoginService from "../services/auth/AuthLoginService";
import AppError from "../shared/AppError";

export default class AuthController {
  public async login(req: Request, res: Response) {
    try {
      const authService = container.resolve(AuthLoginService);      
      res.send(await authService.login(req.body));      
    } catch (error) {
      const errorMessage = new AppError(error).error();
      return res
        .status(errorMessage.status || 404)
        .json(errorMessage.message || "Usuário ou Senha inválido");
    }
  }
}
