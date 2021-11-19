import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { Experiencia } from "../experiencia/experiencia.model";
import { Formacao_Academica } from "../formacao-academica/formacao-academica.model";
import { Formacao_Complementar } from "../formacao-complementar/formacao-complementar.model";
import { Habilidade } from "../habilidade/habilidade.model";
import { Usuario_Experiencia } from "../usuario-experiencia/usuario-experiencia.model";
import { Usuario_FormacaoA } from "../usuario-formacao-a/usuario-formacao-a.model";
import { Usuario_FormacaoC } from "../usuario-formacao-c/usuario-formacao-c.model";
import { Usuario_Habilidade } from "../usuario-habilidade/usuario-habilidade.model";

@Table({ freezeTableName: true })
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
            isIn: [['Canditado', 'Gestor']]
        }
    })
    tipo: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.DATEONLY
    })
    data_nascimento: Date;

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

    @BelongsToMany(() => Formacao_Academica, () => Usuario_FormacaoA)
    formacoes_a: Formacao_Academica[]

    @BelongsToMany(() => Formacao_Complementar, () => Usuario_FormacaoC)
    formacoes_c: Formacao_Complementar[]
}