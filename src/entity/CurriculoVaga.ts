import { Entity, PrimaryColumn, JoinColumn, ManyToOne, Column, ManyToMany } from "typeorm";
import Usuario from "./Usuario";
import Tipo from "./Tipo";
import Vagas from "./Vagas";
import Curriculo from "./Curriculo";

@Entity("curriculo_vaga")
export default class CurriculoVaga {
  @PrimaryColumn()
  curriculoId: number;

  @PrimaryColumn()
  vagaId: number;

  @Column()
  selecionado: boolean;

  @Column()
  motivo?: string;

  @ManyToOne(() => Vagas, (vagas) => vagas.vagaId)
  @JoinColumn({ name: "vagaId" })
  vaga: Vagas;

  @ManyToOne(() => Curriculo, (curriculo) => curriculo.curriculoId)
  @JoinColumn({ name: "curriculoId" })
  curriculo: Curriculo;
}
