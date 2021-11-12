import { Inject, Injectable } from "@nestjs/common";
import { Experiencia } from "src/experiencia/experiencia.model";
import { EXPERIENCIA_REPOSITORY } from "./constants";

@Injectable()
export class ExperienciaService {
    
    constructor(
        @Inject(EXPERIENCIA_REPOSITORY)
        private experienciasModel: typeof Experiencia
    ) {}

    async adicionar(experiencia: Experiencia) {
        this.experienciasModel.create(experiencia);
    }

    async listar_todos(): Promise<Experiencia[]> {
        return this.experienciasModel.findAll();
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
        const experiencia: Experiencia = await this.listar_id(id);
        experiencia.destroy();
    }
}