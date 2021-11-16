import { Inject, Injectable } from "@nestjs/common";
import { Usuario_FormacaoC } from "src/usuario-formacao-c/usuario-formacao-c.model";
import { USUARIO_FORMACAO_C_REPOSITORY } from "./constants";


@Injectable()
export class UsuarioFormacaoCService {
    
    constructor(
        @Inject(USUARIO_FORMACAO_C_REPOSITORY)
        private usuarios_formacao_cModel: typeof Usuario_FormacaoC
    ) {}

    async adicionar(usuario_formacao_c: Usuario_FormacaoC) {
        this.usuarios_formacao_cModel.create(usuario_formacao_c);
    }

    async listar_todos(): Promise<Usuario_FormacaoC[]> {
        return this.usuarios_formacao_cModel.findAll();
    }

    async listar_id(id: number): Promise<Usuario_FormacaoC> {
        return this.usuarios_formacao_cModel.findByPk(id);
    }

    async atualizar(usuario_formacao_c: Usuario_FormacaoC, id: number): Promise<Usuario_FormacaoC> {
        return this.usuarios_formacao_cModel.update(usuario_formacao_c, {
            where: {
                id: id
            },
            returning: true
        }).then(() => {
            return this.listar_id(id);
        });
    }

    async deletar(id: number) {
        const usuario_formacao_c: Usuario_FormacaoC = await this.listar_id(id);
        usuario_formacao_c.destroy();
    }
}