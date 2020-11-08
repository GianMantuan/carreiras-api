import * as bcrypt from "bcryptjs";
import { format } from "date-fns";

export default class Util {
  public hashPassword(password: any): string {
    return bcrypt.hashSync(password, 8);
  }

  public validatePassword(
    unencryptedPassword: string,
    password: string
  ): boolean {
    return bcrypt.compareSync(unencryptedPassword, password);
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
