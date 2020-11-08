export default interface IContactDTO {
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
