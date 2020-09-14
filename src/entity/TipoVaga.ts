import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("tipo_vaga")
export default class TipoVaga {
  @PrimaryGeneratedColumn()
  tipoVagaId: number;

  @Column()
  descricao: string;
}
