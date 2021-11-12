import { Injectable } from "@nestjs/common";
import { UsuarioService } from "src/usuario/usuario.service";

@Injectable()
export class AuthService {

    constructor(private usuarioService: UsuarioService) {}

    async validarUsuario(email: string, senha_usuario: string): Promise<any> {
        const usuario = await this.usuarioService.listar_email(email);

        if (usuario && usuario.senha === senha_usuario) {
            const { senha, ...result } = usuario;
            return result;
        }
        return null;
    }
}