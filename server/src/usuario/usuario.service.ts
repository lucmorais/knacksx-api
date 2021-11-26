import { Inject, Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.model";
import { USUARIO_REPOSITORY } from "./constants";
import { Habilidade } from "src/habilidade/habilidade.model";
import { Experiencia } from "src/experiencia/experiencia.model";

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
        return this.usuariosModel.findAll({
            where: {
                tipo: 'Candidato'
            },
            order: [
                ['nome', 'ASC']
            ],
            include: [{
                model: Habilidade,
                required: false
            },
            {
                model: Experiencia,
                required: false
            }]
        });
    }

    async listar_todos_experiencia(): Promise<Usuario[]> {
        return this.usuariosModel.findAll({
            include: [{
                model: Habilidade,
                required: false
            },
            {
                model: Experiencia,
                required: true
            }]
        });
    }

    async listar_todos_habilidade(): Promise<Usuario[]> {
        return this.usuariosModel.findAll({
            include: [{
                model: Habilidade,
                required: true
            },
            {
                model: Experiencia,
                required: false
            }]
        });
    }

    async buscar_todos_habilidade_experiencia(): Promise<Usuario[]> {
        return this.usuariosModel.findAll({
            include: [{
                model: Habilidade,
                required: true
            },
            {
                model: Experiencia,
                required: true
            }]
        });
    }

    async buscar_todos_habilidade(titulo: string): Promise<Usuario[]> {
        return this.usuariosModel.findAll({
            include: [{
                model: Habilidade,
                where: {
                    titulo: titulo
                }},
                {
                    model: Experiencia,
                    required: false
                }]
        });
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
        try {
            const usuario: Usuario = await this.listar_id(id);
            usuario.destroy();
        } catch (error) {
            const usuario: Usuario = await this.listar_id(id);
            usuario.destroy();
        }
    }
}