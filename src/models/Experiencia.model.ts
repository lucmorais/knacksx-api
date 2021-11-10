import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Usuario } from "./Usuario.model";
import { Usuario_Experiencia } from "./UsuarioExperiencia.model";

@Table({ freezeTableName: true })
export class Experiencia extends Model {
    
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
        type: DataType.TEXT
    })
    atividades: string;

    @BelongsToMany(() => Usuario, () => Usuario_Experiencia)
    usuarios: Usuario[]
}