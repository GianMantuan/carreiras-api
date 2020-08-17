import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  // Get JWT
  const token = <string>req.headers["auth"];
  let jwtPayload;

  // Validate token and get data
  try {
    jwtPayload = <any>jwt.verify(token, config.jwtSecret);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    res.status(401).send();
    return;
  }

  // Token valid for 1 hour
  // Renew token every request
  const { usuarioId, login } = jwtPayload;
  const newToken = jwt.sign({ usuarioId, login }, config.jwtSecret, {
    expiresIn: "1h",
  });
  res.setHeader("token", newToken);

  next();
};
