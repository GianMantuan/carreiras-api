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
import TipoVaga from "./TipoVaga";

@Entity("experiencia")
@Unique(["experienciaId"])
export default class Experiencia {
  @PrimaryGeneratedColumn()
  experienciaId: number;

  @Column()
  curriculoId: number;

  @Column()
  tipoVagaId: number;

  @Column()
  cargo: string;

  @Column()
  empresa: string;

  @Column()
  localidade: string;

  @Column()
  dataInicio: string;

  @Column()
  dataFim?: string;

  @Column()
  descricao: string;

  @ManyToOne(() => Curriculo, (curriculo) => curriculo.curriculoId)
  @JoinColumn({ name: "curriculoId" })
  usuario: Curriculo;
}
