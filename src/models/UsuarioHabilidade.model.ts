import { Column, Model, DataType, Table, ForeignKey, PrimaryKey, AutoIncrement } from "sequelize-typescript";
import { Habilidade } from "./Habilidade.model";
import { Usuario } from "./Usuario.model";

@Table({ freezeTableName: true })
export class Usuario_Habilidade extends Model {

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id: number;
    
    @Column({
        type: DataType.STRING(20),
        validate: {
            isIn: [['Básico', 'Intermediário', 'Avançado']]
        }
    })
    nivel: string;

    @ForeignKey(() => Usuario)
    @Column
    fk_usuario: number

    @ForeignKey(() => Habilidade)
    @Column
    fk_habilidade: number
}