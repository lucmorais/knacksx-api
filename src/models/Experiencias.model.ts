import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Experiencias extends Model {
    
    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    empresa: string;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    area: string;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false
    })
    data_inicio: Date;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false
    })
    data_fim: Date;

    @Column({
        type: DataType.TEXT
    })
    atividades: string;
}