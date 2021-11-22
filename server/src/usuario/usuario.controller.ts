import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from "@nestjs/common";
import { Response } from "@nestjs/common";
import { Usuario } from "src/usuario/usuario.model";
import { Usuario_Habilidade } from "src/usuario-habilidade/usuario-habilidade.model";
import { Usuario_Experiencia } from "src/usuario-experiencia/usuario-experiencia.model";
import { UsuarioService } from "src/usuario/usuario.service";
import { UsuarioExperienciaService } from "src/usuario-experiencia/usuario-experiencia.service";
import { UsuarioHabilidadeService } from "src/usuario-habilidade/usuario-habilidade.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller('usuarios')
export class UsuarioController {

    constructor(
        private usuariosService: UsuarioService,
        private usuarios_habilidadesService: UsuarioHabilidadeService,
        private usuarios_experienciasService: UsuarioExperienciaService
        ) {}
    
    @Get()
    async buscar_todos(): Promise<Usuario[] | Error> {
        try {
            return this.usuariosService.listar_todos();
        } catch (error) {
            return error;
        }
    }
    
    @Get(':id')
    async buscar_id(@Param() param): Promise<Usuario | Error> {
        try {
            return this.usuariosService.listar_id(param.id);
        } catch (error) {
            return error;
        }
    }
    
    @Post()
    async adicionar(@Body() usuario: Usuario): Promise<any | Error> {
        try {
            this.usuariosService.adicionar(usuario);
            return usuario;
        } catch (error) {
            return error;
        }
    }

    @Put(':id')
    async atualizar(@Param() param, @Body() usuario: Usuario): Promise<Usuario | Error> {
        try {
            return this.usuariosService.atualizar(usuario, param.id);
        } catch (error) {
            return error;
        }
    }

    @Delete(':id')
    async deletar(@Param() param, @Res() res: Response): Promise<any | Error>{
        try {
            this.usuariosService.deletar(param.id);
            return res.json();
        } catch (error) {
            return error;
        }
    }

    // Usuarios_Habilidades
    @Get('/habilidades/all')
    async buscar_todos_usuarios_habilidades(): Promise<Usuario_Habilidade[] | Error> {
        try {
            return this.usuarios_habilidadesService.listar_todos();
        } catch (error) {
            return error;
        }
    }
    
    @Get('/habilidades/:id')
    async buscar_id_usuario_habilidade(@Param() param): Promise<Usuario_Habilidade | Error> {
        try {
            return this.usuarios_habilidadesService.listar_id(param.id);
        } catch (error) {
            return error;
        }
    }

    /*
    @Put('/habilidades/:id')
    async atualizar_usuario_habilidade(@Param() param, @Body() usuario_habilidade: Usuario_Habilidade): Promise<Usuario_Habilidade | Error> {
        try {
            return this.usuarios_habilidadesService.atualizar(usuario_habilidade, param.id);
        } catch (error) {
            return error;
        }
    }*/

    @Delete('/habilidades/:id')
    async deletar_usuario_habilidade(@Param() param, @Res() res: Response): Promise<any | Error>{
        try {
            this.usuarios_habilidadesService.deletar(param.id);
            return res.json();
        } catch (error) {
            return error;
        }
    }

    // Usuarios_Experiencias
    @Get('/experiencias/all')
    async buscar_todos_usuarios_experiencias(): Promise<Usuario_Experiencia[] | Error> {
        try {
            return this.usuarios_experienciasService.listar_todos();
        } catch (error) {
            return error;
        }
    }
    
    @Get('/experiencias/:id')
    async buscar_id_usuario_experiencia(@Param() param): Promise<Usuario_Experiencia | Error> {
        try {
            return this.usuarios_experienciasService.listar_id(param.id);
        } catch (error) {
            return error;
        }
    }
    
    @Post('/experiencias')
    async adicionar_usuario_experiencia(@Body() usuario_experiencia: Usuario_Experiencia): Promise<any | Error> {
        try {
            this.usuarios_experienciasService.adicionar(usuario_experiencia);
            return usuario_experiencia;
        } catch (error) {
            return error;
        }
    }

    @Put('/experiencias/:id')
    async atualizar_usuario_experiencia(@Param() param, @Body() usuario_experiencia: Usuario_Experiencia): Promise<Usuario_Experiencia | Error> {
        try {
            return this.usuarios_experienciasService.atualizar(usuario_experiencia, param.id);
        } catch (error) {
            return error;
        }
    }

    @Delete('/experiencias/:id')
    async deletar_usuario_experiencia(@Param() param, @Res() res: Response): Promise<any | Error>{
        try {
            this.usuarios_experienciasService.deletar(param.id);
            return res.json();
        } catch (error) {
            return error;
        }
    }
}    