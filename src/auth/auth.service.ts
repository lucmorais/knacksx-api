import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "src/usuario/usuario.service";

@Injectable()
export class AuthService {

    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
    ) {}

    async validarUsuario(email: string, senha_usuario: string): Promise<any> {
        const usuario = await this.usuarioService.listar_email(email);

        if (usuario && usuario.senha === senha_usuario) {
            const { senha, ...result } = usuario;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}