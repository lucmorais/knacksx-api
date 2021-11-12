import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UsuarioService } from "src/usuario/usuario.service";
import { UsuarioModule } from "src/usuario/usuario.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./constants";

@Module({
    imports: [
        UsuarioModule, 
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        })
    ],    
    providers: [AuthService, LocalStrategy],
    exports: [AuthService]
})
export class AuthModule {}