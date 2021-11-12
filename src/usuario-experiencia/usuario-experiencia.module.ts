import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/config/database/database.module";
import { usuario_experienciaProviders } from "./usuario-experiencia.providers";
import { UsuarioExperienciaService } from "./usuario-experiencia.service";


@Module({
    imports: [DataBaseModule],
    providers: [UsuarioExperienciaService, ...usuario_experienciaProviders],
    exports: [UsuarioExperienciaService]
})
export class UsuarioExperienciaModule {}