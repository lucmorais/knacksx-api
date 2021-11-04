import { Injectable } from "@nestjs/common";
import { Habilidade } from "src/models/Habilidades.model";

@Injectable()
export class HabilidadesService {
    private habilidades: Habilidade[] = [];

    adicionar(habilidade: Habilidade) {
        this.habilidades.push(habilidade);
    }

    listar_todos(): Habilidade[] {
        return this.habilidades;
    }

    listar_id(id: number): Habilidade {
        return this.habilidades.find(user => user.id == id);
    }

    atualizar(habilidade: Habilidade): Habilidade {
        return habilidade;
    }

    deletar(id: number): Habilidade {
        const habilidade = this.habilidades.find(skill => skill.id == id);
        this.habilidades.splice(this.habilidades.indexOf(habilidade), 1);
        return habilidade;
    }
}