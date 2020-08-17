import {
  Entity,
  PrimaryColumn,
  Column,
  Unique,
  OneToOne,
  JoinColumn,
} from "typeorm";
import Usuario from "./Usuario";

@Entity("contato")
@Unique(["usuarioId"])
export default class Contato {
  @PrimaryColumn()
  usuarioId: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefoneResidencial?: string;

  @Column()
  telefoneComercial?: string;

  @Column()
  telefoneCelular: string;

  @Column()
  logradouro: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  dataNascimento: string;

  @Column()
  estadoCivil: string;

  @Column()
  nacionalidade: string;
}
