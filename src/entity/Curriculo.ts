import {
  Entity,
  Column,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
  Unique,
  OneToOne,
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

  @OneToMany(() => Experiencia, (experiencia) => experiencia.curriculoId)
  @JoinColumn({ name: "curriculoId" })
  experiencia: Experiencia[];

  @OneToMany(() => Certificado, (certificado) => certificado.curriculoId)
  @JoinColumn({ name: "curriculoId" })
  certificado: Certificado[];

  @OneToMany(() => Formacao, (formacao) => formacao.curriculoId)
  @JoinColumn({ name: "curriculoId" })
  formacao: Formacao[];

  @OneToMany(() => CurriculoVaga, (curriculoVaga) => curriculoVaga.curriculo)
  @JoinColumn({ name: "curriculoId" })
  curriculoVaga: CurriculoVaga[];
}
