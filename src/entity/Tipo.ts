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

  @ManyToMany(() => Usuario, (usuario) => usuario.tipo)
  usuario: Usuario[]

  @OneToMany(() => TipoUsuario, (tipoUsuario) => tipoUsuario.tipo)
  @JoinColumn({ name: "tipoId" })
  tipoUsuario: TipoUsuario[];
}
