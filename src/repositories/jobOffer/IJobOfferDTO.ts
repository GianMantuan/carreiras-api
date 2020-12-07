export default interface IJobOfferDTO {
  vagaId?: number;
  tipoVagaId: number;
  usuarioId?: number;
  nome: number;
  descricao: string;
  empresa?: string;
  salario?: number;
  requisitosGerais: string;
  requisitosEspecificos?: string;
  ativa: boolean;
}
