import { Inject, Injectable } from "@nestjs/common";
import { Usuario_FormacaoA } from "src/usuario-formacao-a/usuario-formacao-a.model";
import { USUARIO_FORMACAO_A_REPOSITORY } from "./constants";


@Injectable()
export class UsuarioFormacaoAService {
    
    constructor(
        @Inject(USUARIO_FORMACAO_A_REPOSITORY)
        private usuarios_formacao_aModel: typeof Usuario_FormacaoA
    ) {}

    async adicionar(usuario_formacao_a: Usuario_FormacaoA) {
        this.usuarios_formacao_aModel.create(usuario_formacao_a);
    }

    async listar_todos(): Promise<Usuario_FormacaoA[]> {
        return this.usuarios_formacao_aModel.findAll();
    }

    async listar_id(id: number): Promise<Usuario_FormacaoA> {
        return this.usuarios_formacao_aModel.findByPk(id);
    }

    async atualizar(usuario_formacao_a: Usuario_FormacaoA, id: number): Promise<Usuario_FormacaoA> {
        return this.usuarios_formacao_aModel.update(usuario_formacao_a, {
            where: {
                id: id
            },
            returning: true
        }).then(() => {
            return this.listar_id(id);
        });
    }

    async deletar(id: number) {
        const usuario_formacao_a: Usuario_FormacaoA = await this.listar_id(id);
        usuario_formacao_a.destroy();
    }
}