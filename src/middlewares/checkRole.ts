import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import { Usuario } from "../entity/Usuario";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { usuarioId } = res.locals.jwtPayload;
    let user: Usuario;

    const userReposiotry = getRepository(Usuario);
    try {
      user = await userReposiotry.findOneOrFail(usuarioId);
    } catch (error) {
      res.status(401).send();
    }

    // Check if authorized
    // if (roles.indexOf(user.role) > -1) next()
    // else res.status(401).send()
  };
};
