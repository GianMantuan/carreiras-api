import {
  Entity,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import Experiencia from "./Experience";

@Entity("curriculo")
export default class Curriculo {
  @PrimaryColumn()
  curriculoId: number;

  @Column()
  objetivo: string;

  @OneToMany(() => Experiencia, (experiencia) => experiencia.curriculoId)
  @JoinColumn({ name: "curriculoId" })
  experiencia: Experiencia[];
}
