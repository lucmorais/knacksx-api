import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Habilidades extends Model {
    
    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    titulo: string;

    @Column({
        type: DataType.TEXT
    })
    descricao: string;

    @Column({
        type: DataType.STRING,
        validate: {
            isIn: [['Básico', 'Intermediário', 'Avançado']]
        }
    })
    nivel: string;
}