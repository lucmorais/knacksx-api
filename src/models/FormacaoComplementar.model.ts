import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Usuario } from "./Usuario.model";
import { Usuario_FormacaoC } from "./UsuarioFormacaoC.model";

@Table({ freezeTableName: true })
export class Formacao_Complementar extends Model{

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    curso: string;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    instituicao: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: false
    })
    carga_horaria: string;

    @BelongsToMany(() => Usuario, () => Usuario_FormacaoC)
    usuarios: Usuario[]
}