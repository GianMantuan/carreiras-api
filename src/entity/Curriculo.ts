import {
  Entity,
  Column,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
  Unique,
  OneToOne,
  ManyToMany,
} from "typeorm";

import Certificado from "./Certificado";
import CurriculoVaga from "./CurriculoVaga";
import Experiencia from "./Experiencia";
import Formacao from "./Formacao";
import Usuario from "./Usuario";

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

  // @OneToMany(() => CurriculoVaga, (curriculoVaga) => curriculoVaga.curriculo)
  // @JoinColumn({ name: "curriculoId" })
  // curriculoVaga: CurriculoVaga[];
}
