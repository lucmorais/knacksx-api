import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { Usuario } from "../usuario/usuario.model";
import { Usuario_Habilidade } from "../usuario-habilidade/usuario-habilidade.model";

@Table({
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false 
})
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

    @Column({
        type: DataType.STRING(20),
        validate: {
            isIn: [['Básico', 'Intermediário', 'Avançado']]
        }
    })
    nivel: string;

    @BelongsToMany(() => Usuario, () => Usuario_Habilidade)
    usuarios: Usuario[]
}