import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Usuario } from "../usuario/usuario.model";
import { Usuario_Experiencia } from "../usuario-experiencia/usuario-experiencia.model";
import { DatabaseError } from "sequelize";

@Table({
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false 
})
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

    @Column({
        type: DataType.DATEONLY
    })
    data_inicio: Date;

    @Column({
        type: DataType.DATEONLY
    })
    data_fim: Date;

    @BelongsToMany(() => Usuario, () => Usuario_Experiencia)
    usuarios: Usuario[]
}