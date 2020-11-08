import { Request, Response } from "express";
import { container } from "tsyringe";

import AuthLoginService from "../services/auth/AuthLoginService";
import UserGetCredentialService from "../services/user/UserGetCredentialService";
import AppError from "../shared/AppError";

export default class AuthController {
  public async login(req: Request, res: Response) {
    try {
      const authService = container.resolve(AuthLoginService);
      const userService = container.resolve(UserGetCredentialService);

      const {
        usuarioId,
        contato,
        tipoUsuario,
        login,
        senha,
      } = await userService.credential(req.body.login);
      const token = await authService.login({ login, senha }, req.body);

      if (token) {
        return res.status(200).send({
          usuarioId,
          token,
          contato,
          tipoUsuario,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      const errorMessage = new AppError(error).error();
      return res
        .status(errorMessage.status || 404)
        .json(errorMessage.message || "Usuário ou Senha inválido");
    }
  }
}
