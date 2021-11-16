import { USUARIO_EXPERIENCIA_REPOSITORY } from "./constants";
import { Usuario_Experiencia } from "./usuario-experiencia.model";

export const usuario_experienciaProviders = [
    {
        provide: USUARIO_EXPERIENCIA_REPOSITORY,
        useValue: Usuario_Experiencia
    }
];