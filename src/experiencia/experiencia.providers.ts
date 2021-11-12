import { EXPERIENCIA_REPOSITORY } from "./constants";
import { Experiencia } from "./experiencia.model";

export const experienciaProviders = [
    {
        provide: EXPERIENCIA_REPOSITORY,
        useValue: Experiencia
    }
];