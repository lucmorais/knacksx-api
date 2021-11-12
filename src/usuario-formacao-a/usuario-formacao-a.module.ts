import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/config/database/database.module";
import { usuario_formacao_aProviders } from "./usuario-formacao-a.providers"
import { UsuarioFormacaoAService } from "./usuario-formacao-a.service";

@Module({
    imports: [DataBaseModule],
    providers: [UsuarioFormacaoAService, ...usuario_formacao_aProviders],
    exports: [UsuarioFormacaoAService]
})
export class UsuarioFormacaoAModule {}