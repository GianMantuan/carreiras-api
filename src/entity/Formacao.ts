import {
  Entity,
  Column,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  Unique,
} from "typeorm";
import Curriculo from "./Curriculo";

@Entity("formacao")
@Unique(["formacaoId"])
export default class Formacao {
  @PrimaryGeneratedColumn()
  formacaoId: number;

  @Column()
  curriculoId: number;

  @Column()
  cloudStorageId: number;

  @Column()
  instituicao: string;

  @Column()
  diploma: string;

  @Column()
  areaEstudo: string;

  @Column()
  dataInicio: string;

  @Column()
  dataTermino?: string;

  @ManyToOne(() => Curriculo, (curriculo) => curriculo.curriculoId)
  @JoinColumn({ name: "curriculoId" })
  formacao: Curriculo;
}
