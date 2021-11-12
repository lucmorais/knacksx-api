import { FORMACAO_C_REPOSITORY } from "./constants";
import { Formacao_Complementar } from "./formacao-complementar.model";

export const formacao_cProviders = [
    {
        provide: FORMACAO_C_REPOSITORY,
        useValue: Formacao_Complementar
    }
];