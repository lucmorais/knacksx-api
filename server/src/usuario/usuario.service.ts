import { Inject, Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.model";
import { USUARIO_REPOSITORY } from "./constants";

@Injectable()
export class UsuarioService {
    
    constructor(
        @Inject(USUARIO_REPOSITORY)
        private usuariosModel: typeof Usuario
    ) {}

    async adicionar(usuario: Usuario) {
        this.usuariosModel.create(usuario);
    }

    async listar_todos(): Promise<Usuario[]> {
        return this.usuariosModel.findAll();
    }

    async listar_email(email: string): Promise<Usuario> {
        return this.usuariosModel.findOne({
            where: {
                email: email
            }
        });
    }

    async listar_id(id: number): Promise<Usuario> {
        return this.usuariosModel.findByPk(id);
    }

    async atualizar(usuario: Usuario, id: number): Promise<Usuario> {
        return this.usuariosModel.update(usuario, {
            where: {
                id: id
            },
            returning: true
        }).then(() => {
            return this.listar_id(id);
        });
    }

    async deletar(id: number) {
        const usuario: Usuario = await this.listar_id(id);
        usuario.destroy();
    }
}