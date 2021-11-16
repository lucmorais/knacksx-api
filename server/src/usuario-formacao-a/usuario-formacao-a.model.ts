import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Formacao_Academica } from "../formacao-academica/formacao-academica.model";
import { Usuario } from "../usuario/usuario.model";

@Table({ freezeTableName: true })
export class Usuario_FormacaoA extends Model {

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.DATEONLY
    })
    data_conclusao: Date;

    @Column({
        type: DataType.STRING(20),
        allowNull: false,
        validate: {
            isIn: [['Em curso', 'Concluído', 'Trancado']]
        }
    })
    status: string;

    @ForeignKey(() => Usuario)
    @Column
    fk_usuario: number

    @ForeignKey(() => Formacao_Academica)
    @Column
    fk_formacao_a: number
}