import * as bcrypt from "bcryptjs";
import moment from "moment";

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
    return moment(date, "DD/MM/YYYY", true).format();
  }
}
