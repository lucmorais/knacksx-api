import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Formacao_Complementar } from "src/models/FormacaoComplementar.model";


@Injectable()
export class FormacaoComplementarService {
    
    constructor(
        @InjectModel(Formacao_Complementar)
        private formacao_complementarModel: typeof Formacao_Complementar
    ) {}

    async adicionar(formacao_c: Formacao_Complementar) {
        this.formacao_complementarModel.create(formacao_c);
    }

    async listar_todos(): Promise<Formacao_Complementar[]> {
        return this.formacao_complementarModel.findAll();
    }

    async listar_id(id: number): Promise<Formacao_Complementar> {
        return this.formacao_complementarModel.findByPk(id);
    }

    async atualizar(formacao_c: Formacao_Complementar, id: number): Promise<Formacao_Complementar> {
        return this.formacao_complementarModel.update(formacao_c, {
            where: {
                id: id
            },
            returning: true
        }).then(() => {
            return this.listar_id(id);
        });
    }

    async deletar(id: number) {
        const formacao_c: Formacao_Complementar = await this.listar_id(id);
        formacao_c.destroy();
    }
}