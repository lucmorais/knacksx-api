import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/config/database/database.module";
import { formacao_aProviders } from "./formacao-academica.providers";
import { FormacaoAcademicaService } from "./formacao-academica.service";

@Module({
    imports: [DataBaseModule],
    providers: [FormacaoAcademicaService, ...formacao_aProviders],
    exports: [FormacaoAcademicaService]
})
export class FormacaoAModule {}