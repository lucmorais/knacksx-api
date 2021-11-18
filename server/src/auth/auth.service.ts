import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "src/usuario/usuario.service";

@Injectable()
export class AuthService {

    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
    ) {}

    async validarUsuario(email_usuario: string, senha_usuario: string): Promise<any> {
        const usuario = await this.usuarioService.listar_email(email_usuario);

        if (usuario && usuario.senha === senha_usuario) {
            const { id, nome, email } = usuario;
            return { id: id, nome, email};
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.nome, sub: user.id };
        
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}