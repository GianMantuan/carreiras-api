import {
  Entity,
  Column,
  Unique,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Curriculo from "./Curriculo";

@Entity("certificados")
@Unique(["certificadoId"])
export default class Certificado {
  @PrimaryGeneratedColumn()
  certificadoId: number;

  @Column()
  curriculoId: number;

  @Column()
  cloudStorageId: number;

  @Column()
  nome: string;

  @Column()
  organizacaoEmissora: string;

  @Column()
  dataEmissao: string;

  @Column()
  dataExpirar?: string;

  @Column()
  credencialUrl?: string;

  @Column()
  credencialId?: string;

  @ManyToOne(() => Curriculo, (curriculo) => curriculo.curriculoId)
  @JoinColumn({ name: "curriculoId" })
  certificado: Curriculo;
}
