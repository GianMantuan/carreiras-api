export default interface IEducationDTO {
  formacaoId?: number;
  curriculoId: number;
  cloudStorageId: number;
  instituicao: string;
  formacao: string;
  areaEstudo: string;
  dataInicio: string;
  dataFim?: string;
}
