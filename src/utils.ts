import * as bcrypt from "bcryptjs";
import { format } from "date-fns";

export default class Util {
  public hasPassword(password: any): string {
    return bcrypt.hashSync(password, 8);
  }

  public validatePassword(
    unencryptedPassword: string,
    password: string
  ): boolean {
    return bcrypt.compareSync(unencryptedPassword, password);
  }

  public dateConvert(date: string) {
    return format(new Date(date), "DD/MM/YYYY");
  }
}
