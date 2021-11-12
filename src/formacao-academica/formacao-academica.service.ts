import { Inject, Injectable } from "@nestjs/common";
import { Formacao_Academica } from "src/formacao-academica/formacao-academica.model";
import { FORMACAO_A_REPOSITORY } from "src/formacao-academica/constants";

@Injectable()
export class FormacaoAcademicaService {
    
    constructor(
        @Inject(FORMACAO_A_REPOSITORY)
        private formacao_academicaModel: typeof Formacao_Academica
    ) {}

    async adicionar(formacao_a: Formacao_Academica) {
        this.formacao_academicaModel.create(formacao_a);
    }

    async listar_todos(): Promise<Formacao_Academica[]> {
        return this.formacao_academicaModel.findAll();
    }

    async listar_id(id: number): Promise<Formacao_Academica> {
        return this.formacao_academicaModel.findByPk(id);
    }

    async atualizar(formacao_a: Formacao_Academica, id: number): Promise<Formacao_Academica> {
        return this.formacao_academicaModel.update(formacao_a, {
            where: {
                id: id
            },
            returning: true
        }).then(() => {
            return this.listar_id(id);
        });
    }

    async deletar(id: number) {
        const formacao_a: Formacao_Academica = await this.listar_id(id);
        formacao_a.destroy();
    }
}