import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/config/database/database.module";
import { habilidadeProviders } from "./habilidade.providers";
import { HabilidadeService } from "./habilidade.service";

@Module({
    imports: [DataBaseModule],
    providers: [HabilidadeService, ...habilidadeProviders],
    exports: [HabilidadeService]
})
export class HabilidadeModule {}