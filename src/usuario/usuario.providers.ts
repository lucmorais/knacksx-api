import { Usuario } from "./usuario.model";
import { USUARIO_REPOSITORY } from "./constants";

export const usuarioProviders = [
    {
        provide: USUARIO_REPOSITORY,
        useValue: Usuario
    },
];