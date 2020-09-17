import {
  Entity,
  Column,
  Unique,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Curriculo from "./Curriculo";

@Entity("certificado")
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
  url?: string;

  @ManyToOne(() => Curriculo, (curriculo) => curriculo.curriculoId)
  @JoinColumn({ name: "curriculoId" })
  usuario: Curriculo;
}
