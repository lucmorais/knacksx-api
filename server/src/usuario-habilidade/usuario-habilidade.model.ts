import { Column, Model, DataType, Table, ForeignKey, PrimaryKey, AutoIncrement } from "sequelize-typescript";
import { Habilidade } from "../habilidade/habilidade.model";
import { Usuario } from "../usuario/usuario.model";

@Table({
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false 
})
export class Usuario_Habilidade extends Model {

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @ForeignKey(() => Usuario)
    @Column
    fk_usuario: number

    @ForeignKey(() => Habilidade)
    @Column
    fk_habilidade: number
}