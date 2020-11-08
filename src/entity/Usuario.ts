import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";

import Contato from "./Contato";
import Curriculo from "./Curriculo";
import TipoUsuario from "./TipoUsuario";

@Entity("usuario")
@Unique(["login"])
export default class Usuario {
  @PrimaryGeneratedColumn()
  usuarioId: number;

  @Column()
  login: string;

  @Column()
  senha: string;

  @OneToMany(() => TipoUsuario, (tipoUsuario) => tipoUsuario.usuario)
  @JoinColumn({ name: "usuarioId" })
  tipoUsuario: TipoUsuario[];

  @OneToOne(() => Curriculo, (curriculo) => curriculo.usuario)
  curriculo: Curriculo;

  @OneToOne(() => Contato, (contato) => contato.usuarioId)
  @JoinColumn({ name: "usuarioId" })
  contato: Contato;
}
