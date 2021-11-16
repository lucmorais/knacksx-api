import { USUARIO_FORMACAO_A_REPOSITORY } from "./constants";
import { Usuario_FormacaoA } from "./usuario-formacao-a.model";

export const usuario_formacao_aProviders = [
    {
        provide: USUARIO_FORMACAO_A_REPOSITORY,
        useValue: Usuario_FormacaoA
    }
];