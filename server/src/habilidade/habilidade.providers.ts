import { HABILIDADE_REPOSITORY } from "./constants";
import { Habilidade } from "./habilidade.model";

export const habilidadeProviders = [
    {
        provide: HABILIDADE_REPOSITORY,
        useValue: Habilidade
    }
];