import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { format } from "date-fns";

import config from "./config/config";

export default class Util {
  public hashPassword(password: any): string {
    return bcrypt.hashSync(password, 8);
  }

  public validadePassword(unencryptedPassword: string, password: string): boolean {
    return bcrypt.compareSync(unencryptedPassword, password)
  }

  public createToken(user: any): string {
    return jwt.sign(
      { usuarioId: user.usuarioId, login: user.login },
      config.jwtSecret // change eventually to process.env.jwtSecret
    );
  }

  public dateConvert(date: string): string {
    const dateNumber = date.split("/").map((str) => {
      return parseInt(str);
    });

    return format(
      new Date(dateNumber[2], dateNumber[1] - 1, dateNumber[0]),
      "yyyy-MM-dd"
    );
  }
}
