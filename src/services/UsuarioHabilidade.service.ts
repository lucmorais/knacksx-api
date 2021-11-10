import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Usuario_Habilidade } from "src/models/UsuarioHabilidade.model";


@Injectable()
export class UsuarioHabilidadeService {
    
    constructor(
        @InjectModel(Usuario_Habilidade)
        private usuarios_habilidadesModel: typeof Usuario_Habilidade
    ) {}

    async adicionar(usuario_habilidade: Usuario_Habilidade) {
        this.usuarios_habilidadesModel.create(usuario_habilidade);
    }

    async listar_todos(): Promise<Usuario_Habilidade[]> {
        return this.usuarios_habilidadesModel.findAll();
    }

    async listar_id(id: number): Promise<Usuario_Habilidade> {
        return this.usuarios_habilidadesModel.findByPk(id);
    }

    async atualizar(usuario_habilidade: Usuario_Habilidade, id: number): Promise<Usuario_Habilidade> {
        return this.usuarios_habilidadesModel.update(usuario_habilidade, {
            where: {
                id: id
            },
            returning: true
        }).then(() => {
            return this.listar_id(id);
        });
    }

    async deletar(id: number) {
        const usuario_habilidade: Usuario_Habilidade = await this.listar_id(id);
        usuario_habilidade.destroy();
    }
}