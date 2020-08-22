export interface IUserDTO {
  usuarioId?: number;
  login: string;
  senha: string;
  // tipoId?: Array<number>;
}

export interface IRoleDTO {
  tipoId?: number;
  descricao: string;
}

export interface IUserRoleDTO {
  tipoId: number;
}

export interface IContactDTO {
  usuarioId?: number;
  nome: string;
  email: string;
  telefoneResidencial?: string;
  telefoneComercial?: string;
  telefoneCelular: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  cidade: string;
  estado: string;
  dataNascimento: string;
  estadoCivil: string;
  nacionalidade: string;
}
