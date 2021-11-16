import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/config/database/database.module";
import { experienciaProviders } from "./experiencia.providers";
import { ExperienciaService } from "./experiencia.service";

@Module({
    imports: [DataBaseModule],
    providers: [ExperienciaService, ...experienciaProviders],
    exports: [ExperienciaService]
})
export class ExperienciaModule {}