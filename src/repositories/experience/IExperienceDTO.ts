export default interface IExperienceDTO {
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
