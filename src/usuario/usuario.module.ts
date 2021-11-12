import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/config/database/database.module";
import { UsuarioService } from "src/usuario/usuario.service";
import { usuarioProviders } from "./usuario.providers";

@Module({
    imports: [DataBaseModule],
    providers: [UsuarioService, ...usuarioProviders],
    exports: [UsuarioService]
})
export class UsuarioModule {}