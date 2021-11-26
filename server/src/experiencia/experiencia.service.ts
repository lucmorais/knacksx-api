import { Inject, Injectable } from "@nestjs/common";
import { Experiencia } from "src/experiencia/experiencia.model";
import { Usuario } from "src/usuario/usuario.model";
import { EXPERIENCIA_REPOSITORY } from "./constants";

@Injectable()
export class ExperienciaService {
    
    constructor(
        @Inject(EXPERIENCIA_REPOSITORY)
        private experienciasModel: typeof Experiencia
    ) {}

    async adicionar(experiencia: Experiencia) {
        const ret = this.experienciasModel.create(experiencia);
        let id_exp: number = (await ret).id;
        return id_exp;
    }

    async listar_todos(id?: number): Promise<Experiencia[]> {
        return this.experienciasModel.findAll({
            include: {
                model: Usuario,
                where: {
                    id: id
                },
            }
        });
    }

    async listar_id(id: number): Promise<Experiencia> {
        return this.experienciasModel.findByPk(id);
    }

    async atualizar(experiencia: Experiencia, id: number): Promise<Experiencia> {
        return this.experienciasModel.update(experiencia, {
            where: {
                id: id
            },
            returning: true
        }).then(() => {
            return this.listar_id(id);
        });
    }

    async deletar(id: number) {
        try {
            const experiencia: Experiencia = await this.listar_id(id);
            experiencia.destroy();
        } catch (error) {
            const experiencia: Experiencia = await this.listar_id(id);
            experiencia.destroy();
        }
    }
}