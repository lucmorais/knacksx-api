import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Formacao_Complementar } from "./FormacaoComplementar.model";
import { Usuario } from "./Usuario.model";

@Table({ freezeTableName: true })
export class Usuario_FormacaoC extends Model {

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id: number;
    
    @Column({
        type: DataType.DATEONLY
    })
    data_inicio: Date;

    @Column({
        type: DataType.DATEONLY
    })
    data_fim: Date;

    @ForeignKey(() => Usuario)
    @Column
    fk_usuario: number

    @ForeignKey(() => Formacao_Complementar)
    @Column
    fk_formacao_c: number
}