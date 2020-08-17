import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinColumn,
} from "typeorm";
import TipoUsuario from "./TipoUsuario";
import Usuario from "./Usuario";

@Entity("tipo")
export default class Tipo {
  @PrimaryGeneratedColumn()
  tipoId: number;

  @Column()
  descricao: string;

  @OneToMany(() => TipoUsuario, (tipoUsuario) => tipoUsuario.tipo)
  @JoinColumn({ name: "tipoId" })
  tipoUsuario: TipoUsuario[];
}
