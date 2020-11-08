import { QueryFailedError } from "typeorm";

import ErrorMessage from "../config/ErrorMessage.json";
import { IErrorDTO } from "../repositories/dtos";
import { parse } from "path";

export default class AppError {
  private _error: QueryFailedError & { code: "string" };

  constructor(err: QueryFailedError & { code: "string" }) {
    this._error = err;
  }

  public error(defaultResponse: Boolean = false): IErrorDTO {
    const errorMessage = ErrorMessage.find((obj: IErrorDTO) => {
      return obj.pgCode == this._error.code;
    });

    return errorMessage
      ? errorMessage
      : defaultResponse
      ? {
          pgCode: this._error.code,
          status: 400,
          message: this._error.message,
        }
      : {};
  }
}
