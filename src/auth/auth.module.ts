import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UsuarioService } from "src/usuario/usuario.service";
import { UsuarioModule } from "src/usuario/usuario.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports: [UsuarioModule, PassportModule],
    providers: [AuthService, LocalStrategy]
})
export class AuthModule {}