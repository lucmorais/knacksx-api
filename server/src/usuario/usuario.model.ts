import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { Experiencia } from "../experiencia/experiencia.model";
import { Habilidade } from "../habilidade/habilidade.model";
import { Usuario_Experiencia } from "../usuario-experiencia/usuario-experiencia.model";
import { Usuario_Habilidade } from "../usuario-habilidade/usuario-habilidade.model";

@Table({
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false 
})
export class Usuario extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nome: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: false,
        validate: {
            isIn: [['Candidato', 'Gestor']]
        }
    })
    tipo: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.STRING(11),
        allowNull: false
    })
    telefone: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: false
    })
    senha: string;

    @Column({
        type: DataType.STRING
    })
    reset_senha: string;

    @BelongsToMany(() => Habilidade, () => Usuario_Habilidade)
    habilidades: Habilidade[]

    @BelongsToMany(() => Experiencia, () => Usuario_Experiencia)
    experiencias: Experiencia[]
}