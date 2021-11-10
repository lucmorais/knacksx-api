import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { Experiencia } from "./Experiencia.model";
import { Formacao_Academica } from "./FormacaoAcademica.model";
import { Formacao_Complementar } from "./FormacaoComplementar.model";
import { Habilidade } from "./Habilidade.model";
import { Usuario_Experiencia } from "./UsuarioExperiencia.model";
import { Usuario_FormacaoA } from "./UsuarioFormacaoA.model";
import { Usuario_FormacaoC } from "./UsuarioFormacaoC.model";
import { Usuario_Habilidade } from "./UsuarioHabilidade.model";

@Table({ freezeTableName: true })
export class Usuario extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nome: string;

    @Column({
        type: DataType.STRING(20),
        allowNull: false
    })
    tipo: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false
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