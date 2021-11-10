import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Usuario_FormacaoA } from "src/models/UsuarioFormacaoA.model";


@Injectable()
export class UsuarioFormacaoAService {
    
    constructor(
        @InjectModel(Usuario_FormacaoA)
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