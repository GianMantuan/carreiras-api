export interface IUserDTO {
  usuarioId?: number;
  login: string;
  senha: string;
}

export interface IRoleDTO {
  tipoId?: number;
  descricao: string;
}

export interface IUserRoleDTO {
  tipoId: number;
  usuarioId: number;
}

export interface IJobOfferTypeDTO {
  tipoVagaId: number;
  descricao: string;
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

export interface ICurriculumDTO {
  curriculoId?: number;
  objetivo: string;
}

export interface IExperienceDTO {
  experienciaId?: number;
  curriculoId: number;
  tipoVagaId: number;
  cargo: string;
  empresa: string;
  localidade: string;
  dataInicio: string;
  dataFim?: string;
  descricao: string;
}

export interface IErrorDTO {
  pgCode?: string;
  status?: number;
  message?: string;
}
