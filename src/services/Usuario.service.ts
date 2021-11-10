import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Usuario } from "src/models/Usuario.model";

@Injectable()
export class UsuarioService {
    
    constructor(
        @InjectModel(Usuario)
        private usuariosModel: typeof Usuario
    ) {}

    async adicionar(usuario: Usuario) {
        this.usuariosModel.create(usuario);
    }

    async listar_todos(): Promise<Usuario[]> {
        return this.usuariosModel.findAll();
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