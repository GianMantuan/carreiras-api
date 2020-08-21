import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from "typeorm";
import TipoUsuario from "./TipoUsuario";

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
