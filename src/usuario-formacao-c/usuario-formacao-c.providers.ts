import { USUARIO_FORMACAO_C_REPOSITORY } from "./constants";
import { Usuario_FormacaoC } from "./usuario-formacao-c.model";

export const usuario_formacao_cProviders = [
    {
        provide: USUARIO_FORMACAO_C_REPOSITORY,
        useValue: Usuario_FormacaoC
    }
];