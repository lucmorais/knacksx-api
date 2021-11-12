import { Inject, Injectable } from "@nestjs/common";
import { Habilidade } from "src/habilidade/habilidade.model";
import { HABILIDADE_REPOSITORY } from "./constants";

@Injectable()
export class HabilidadeService {
    
    constructor(
        @Inject(HABILIDADE_REPOSITORY)
        private habilidadesModel: typeof Habilidade
    ) {}

    async adicionar(habilidade: Habilidade) {
        this.habilidadesModel.create(habilidade);
    }

    async listar_todos(): Promise<Habilidade[]> {
        return this.habilidadesModel.findAll();
    }

    async listar_id(id: number): Promise<Habilidade> {
        return this.habilidadesModel.findByPk(id);
    }

    async atualizar(habilidade: Habilidade, id: number): Promise<Habilidade> {
        return this.habilidadesModel.update(habilidade, {
            where: {
                id: id
            },
            returning: true
        }).then(() => {
            return this.listar_id(id);
        });
    }

    async deletar(id: number) {
        const habilidade: Habilidade = await this.listar_id(id);
        habilidade.destroy();
    }
}