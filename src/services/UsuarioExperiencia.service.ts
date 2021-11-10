import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Usuario_Experiencia } from "src/models/UsuarioExperiencia.model";


@Injectable()
export class UsuarioExperienciaService {
    
    constructor(
        @InjectModel(Usuario_Experiencia)
        private usuarios_experienciasModel: typeof Usuario_Experiencia
    ) {}

    async adicionar(usuario_experiencia: Usuario_Experiencia) {
        this.usuarios_experienciasModel.create(usuario_experiencia);
    }

    async listar_todos(): Promise<Usuario_Experiencia[]> {
        return this.usuarios_experienciasModel.findAll();
    }

    async listar_id(id: number): Promise<Usuario_Experiencia> {
        return this.usuarios_experienciasModel.findByPk(id);
    }

    async atualizar(usuario_experiencia: Usuario_Experiencia, id: number): Promise<Usuario_Experiencia> {
        return this.usuarios_experienciasModel.update(usuario_experiencia, {
            where: {
                id: id
            },
            returning: true
        }).then(() => {
            return this.listar_id(id);
        });
    }

    async deletar(id: number) {
        const usuario_experiencia: Usuario_Experiencia = await this.listar_id(id);
        usuario_experiencia.destroy();
    }
}