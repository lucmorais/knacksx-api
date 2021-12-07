import { MailerService } from "@nestjs-modules/mailer";
import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { randomBytes } from "crypto";
import { UsuarioService } from "src/usuario/usuario.service";

@Injectable()
export class AuthService {

    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private readonly mailerService: MailerService
    ) {}

    async validarUsuario(email_usuario: string, senha_usuario: string): Promise<any> {
        const usuario = await this.usuarioService.listar_email(email_usuario);

        if (usuario && usuario.senha === senha_usuario) {
            const { id, nome, email, tipo, telefone } = usuario;
            return { id: id, nome, email, role: tipo, telefone };
        }
        return null;
    }

    async login(user: any) {
        const payload = { 
            username: user.nome, 
            sub: user.id, 
            role: user.role,
            email: user.email,
            tel: user.telefone
        };
        
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: payload.sub,
                username: payload.username,
                email: payload.email,
                role: payload.role
            }
        };
    }

    async recuperarSenha(email_usuario: string) {
        const usuario = await this.usuarioService.listar_email(email_usuario);
    
        if (!usuario){
            
            return null;
        }
    
        usuario.reset_senha = randomBytes(4).toString('hex');
        
        usuario.save();

        await this.mailerService
            .sendMail({
                to: `${usuario.email}`,
                from: 'noreply@wiseapp.com',
                subject: 'Recuperação de senha',
                text: 'Código para recuperar a senha',
                html: `<p>Este é o código para recuperar a senha: <b>${usuario.reset_senha}</b></p>`,
            })
            .then(() => {})
            .catch(() => {});
        
        return email_usuario;
    }
}