import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { Usuario } from "./Usuario.model";
import { Usuario_Habilidade } from "./UsuarioHabilidade.model";

@Table({ freezeTableName: true })
export class Habilidade extends Model {
    
    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    titulo: string;

    @Column({
        type: DataType.TEXT
    })
    descricao: string;

    @BelongsToMany(() => Usuario, () => Usuario_Habilidade)
    usuarios: Usuario[]
}