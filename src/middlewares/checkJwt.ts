import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    let jwtPayload;
    let token = <string>req.headers['authorization']
    
    if (token.startsWith('Bearer ')) token = token.slice(7, token.length);

    jwt.verify(token, config.jwtSecret);
    
    next();    
  } catch (error) {
    res.status(401).send();
    return;
  }

  // Token valid for 1 hour
  // Renew token every request
  // const { usuarioId, login } = jwtPayload;
  // const newToken = jwt.sign({ usuarioId, login }, config.jwtSecret, {
  //   expiresIn: "1h",
  // });
  // res.setHeader("token", newToken);

};
