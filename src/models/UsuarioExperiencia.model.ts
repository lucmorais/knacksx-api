import { Column, Model, DataType, Table, ForeignKey, PrimaryKey, AutoIncrement } from "sequelize-typescript";
import { Experiencia } from "./Experiencia.model";
import { Usuario } from "./Usuario.model";

@Table({ freezeTableName: true })
export class Usuario_Experiencia extends Model {

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

    @ForeignKey(() => Experiencia)
    @Column
    fk_experiencia: number
}