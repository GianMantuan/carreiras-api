export default interface ICertificateDTO {
  certificadoId?: number;
  curriculoId: number;
  cloudStorageId: number;
  nome: string;
  organizacaoEmissora: string;
  dataEmissao: string;
  dataExpirar?: string;
  url?: string;
}
