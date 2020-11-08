export interface ILoginDTO {
  login: string;
  senha: string;
}

export interface IErrorDTO {
  pgCode?: string;
  status?: number;
  message?: string;
}
