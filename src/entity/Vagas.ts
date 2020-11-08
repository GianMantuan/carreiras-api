import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
} from "typeorm";

import CurriculoVaga from "./CurriculoVaga";

@Entity("vagas")
@Unique(["vagaId"])
export default class Vagas {
  @PrimaryGeneratedColumn()
  vagaId: number;

  @Column()
  tipoVagaId: number;

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

  @OneToMany(() => CurriculoVaga, (curriculoVaga) => curriculoVaga.vagas)
  @JoinColumn({ name: "vagaId" })
  curriculoVaga: CurriculoVaga[];
}
