import { Inject, Injectable } from "@nestjs/common";
import { Usuario_Experiencia } from "src/usuario-experiencia/usuario-experiencia.model";
import { USUARIO_EXPERIENCIA_REPOSITORY } from "./constants";


@Injectable()
export class UsuarioExperienciaService {
    
    constructor(
        @Inject(USUARIO_EXPERIENCIA_REPOSITORY)
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