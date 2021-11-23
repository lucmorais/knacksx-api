import { Inject, Injectable } from "@nestjs/common";
import { Op } from "sequelize";
import { Usuario_Experiencia } from "src/usuario-experiencia/usuario-experiencia.model";
import { USUARIO_EXPERIENCIA_REPOSITORY } from "./constants";
import { User_Exp } from "./usuario-experiencia";


@Injectable()
export class UsuarioExperienciaService {
    
    constructor(
        @Inject(USUARIO_EXPERIENCIA_REPOSITORY)
        private usuarios_experienciasModel: typeof Usuario_Experiencia
    ) {}

    async adicionar(id_usuario: number, id_experiencia?: number) {
        const usuario_experiencia = new User_Exp(id_usuario, id_experiencia);
        this.usuarios_experienciasModel.create(usuario_experiencia);
    }

    async listar_todos(): Promise<Usuario_Experiencia[]> {
        return this.usuarios_experienciasModel.findAll();
    }

    async listar_id(id_usuario: number, id_experiencia?: number): Promise<Usuario_Experiencia> {
        return this.usuarios_experienciasModel.findOne({
            where: {
                [Op.and]: [{ fk_usuario: id_usuario }, { fk_experiencia: id_experiencia }]
            }
        });
    }

    /*
    async atualizar(usuario_experiencia: Usuario_Experiencia, id: number): Promise<Usuario_Experiencia> {
        return this.usuarios_experienciasModel.update(usuario_experiencia, {
            where: {
                id: id
            },
            returning: true
        }).then(() => {
            return this.listar_id(id);
        });
    }*/

    async deletar(id_usuario: number, id_experiencia?: number) {
        const usuario_experiencia: Usuario_Experiencia = await this.listar_id(id_usuario, id_experiencia);
        usuario_experiencia.destroy();
    }
}