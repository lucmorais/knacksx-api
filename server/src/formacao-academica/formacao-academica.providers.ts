import { FORMACAO_A_REPOSITORY } from "./constants";
import { Formacao_Academica } from "./formacao-academica.model";

export const formacao_aProviders = [
    {
        provide: FORMACAO_A_REPOSITORY,
        useValue: Formacao_Academica
    }
];