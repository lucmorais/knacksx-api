import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Formacao_Academica extends Model {
    
    @Column({
        type: DataType.STRING(40),
        allowNull: false
    })
    curso: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    instituicao: string;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    tipo: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: false,
        validate: {
            isIn: [['Em curso', 'Concluído', 'Trancado']]
        }
    })
    status: string;

    @Column({
        type: DataType.DATEONLY
    })
    data_conclusao: Date;
}