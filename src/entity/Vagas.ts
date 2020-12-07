import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
  OneToOne,
} from "typeorm";

import CurriculoVaga from "./CurriculoVaga";
import TipoVaga from "./TipoVaga";

@Entity("vagas")
@Unique(["vagaId"])
export default class Vagas {
  @PrimaryGeneratedColumn()
  vagaId: number;

  @Column()
  tipoVagaId: number;

  @Column()
  usuarioId: number;

  @Column()
  nome: number;

  @Column()
  descricao: string;

  @Column()
  empresa?: string;

  @Column()
  salario?: number;

  @Column()
  requisitosGerais: string;

  @Column()
  requisitosEspecificos?: string;

  @OneToOne(() => TipoVaga, (tipoVaga) => tipoVaga.tipoVagaId)
  tipoVaga: TipoVaga;

  @OneToMany(() => CurriculoVaga, (curriculoVaga) => curriculoVaga.vaga)
  @JoinColumn({ name: "vagaId" })
  curriculoVaga: CurriculoVaga[];
}
