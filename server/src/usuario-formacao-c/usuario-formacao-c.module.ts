import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/config/database/database.module";
import { usuario_formacao_cProviders } from "./usuario-formacao-c.providers"
import { UsuarioFormacaoCService } from "./usuario-formacao-c.service";

@Module({
    imports: [DataBaseModule],
    providers: [UsuarioFormacaoCService, ...usuario_formacao_cProviders],
    exports: [UsuarioFormacaoCService]
})
export class UsuarioFormacaoCModule {}