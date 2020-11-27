import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import Contato from "./Contato";
import Curriculo from "./Curriculo";
import Tipo from "./Tipo";
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

  @OneToMany(() => TipoUsuario, (tipoUsuario) => tipoUsuario.usuario, {eager: true, cascade: true})
  tipoUsuario: TipoUsuario[];

  @ManyToMany(() => Tipo, (tipo) => tipo.usuario)
  @JoinTable({
    name: 'tipo_usuario',
    joinColumn: {
      name: 'usuarioId'
    },
    inverseJoinColumn: {
      name: 'tipoId'
    }
  })
  tipo: Tipo[]

  @OneToOne(() => Curriculo, (curriculo) => curriculo.usuario)
  curriculo: Curriculo;

  @OneToOne(() => Contato, (contato) => contato.usuarioId)
  @JoinColumn({ name: "usuarioId" })
  contato: Contato;
}
