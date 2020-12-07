import {
  Entity,
  Column,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
  Unique,
  OneToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";

import Certificado from "./Certificado";
import CurriculoVaga from "./CurriculoVaga";
import Experiencia from "./Experiencia";
import Formacao from "./Formacao";
import Usuario from "./Usuario";
import Vagas from "./Vagas";

@Entity("curriculo")
@Unique(["curriculoId"])
export default class Curriculo {
  @PrimaryColumn()
  curriculoId: number;

  @Column()
  descricao: string;

  @OneToOne(() => Usuario, (usuario) => usuario.curriculo)
  @JoinColumn({ name: "curriculoId" })
  usuario: Usuario;

  @OneToMany(() => Experiencia, (experiencia) => experiencia.curriculo)
  experiencia: Experiencia[];

  @OneToMany(() => Certificado, (certificado) => certificado.certificado)
  certificado: Certificado[];

  @OneToMany(() => Formacao, (formacao) => formacao.formacao)
  formacao: Formacao[];

  @OneToMany(() => CurriculoVaga, (curriculoVaga) => curriculoVaga.curriculo)
  curriculoVaga: CurriculoVaga[];
}
