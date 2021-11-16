import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/config/database/database.module";
import { formacao_cProviders } from "./formacao-complementar.providers";
import { FormacaoComplementarService } from "./formacao-complementar.service";

@Module({
    imports: [DataBaseModule],
    providers: [FormacaoComplementarService, ...formacao_cProviders],
    exports: [FormacaoComplementarService]
})
export class FormacaoCModule {}