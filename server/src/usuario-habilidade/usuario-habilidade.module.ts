import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/config/database/database.module";
import { usuario_habilidadeProviders } from "./usuario-habilidade.providers";
import { UsuarioHabilidadeService } from "./usuario-habilidade.service";

@Module({
    imports: [DataBaseModule],
    providers: [UsuarioHabilidadeService, ...usuario_habilidadeProviders],
    exports: [UsuarioHabilidadeService]
})
export class UsuarioHabilidadeModule {}