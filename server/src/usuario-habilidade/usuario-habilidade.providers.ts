import { USUARIO_HABILIDADE_REPOSITORY } from "./constants";
import { Usuario_Habilidade } from "./usuario-habilidade.model";

export const usuario_habilidadeProviders = [
    {
        provide: USUARIO_HABILIDADE_REPOSITORY,
        useValue: Usuario_Habilidade
    }
];