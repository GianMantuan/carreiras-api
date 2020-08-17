import { Entity, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import Usuario from "./Usuario";
import Tipo from "./Tipo";

@Entity("tipo_usuario")
export default class TipoUsuario {
  @PrimaryColumn()
  usuarioId: number;

  @PrimaryColumn()
  tipoId: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.tipoUsuario)
  @JoinColumn({ name: "usuarioId" })
  usuario: Usuario;

  @ManyToOne(() => Tipo, (tipo) => tipo.tipoUsuario)
  @JoinColumn({ name: "tipoId" })
  tipo: Tipo;
}
