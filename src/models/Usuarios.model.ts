import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Usuarios extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nome: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: false
    })
    tipo: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false
    })
    data_nascimento: Date;

    @Column({
        type: DataType.STRING(20),
        allowNull: false
    })
    senha: string;

    @Column({
        type: DataType.STRING
    })
    reset_senha: string;
}