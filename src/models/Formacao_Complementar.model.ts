import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Formacao_Complementar extends Model{

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    curso: string;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    instituicao: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: false
    })
    carga_horaria: string;

    @Column({
        type: DataType.DATEONLY
    })
    data_inicio: Date;

    @Column({
        type: DataType.DATEONLY
    })
    data_fim: Date;
}