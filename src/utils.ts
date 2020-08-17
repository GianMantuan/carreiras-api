import * as bcrypt from "bcryptjs";

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
}
