import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { Usuario } from "../usuario/usuario.model";
import { Usuario_FormacaoA } from "../usuario-formacao-a/usuario-formacao-a.model";

@Table({ freezeTableName: true })
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

    @BelongsToMany(() => Usuario, () => Usuario_FormacaoA)
    usuarios: Usuario[]
}