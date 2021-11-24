import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from "@nestjs/common";
import { Response } from "@nestjs/common";
import { Usuario } from "src/usuario/usuario.model";
import { UsuarioService } from "src/usuario/usuario.service";
import { UsuarioExperienciaService } from "src/usuario-experiencia/usuario-experiencia.service";
import { UsuarioHabilidadeService } from "src/usuario-habilidade/usuario-habilidade.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller('usuarios')
export class UsuarioController {

    constructor(
        private usuariosService: UsuarioService,
        private usuarios_habilidadesService: UsuarioHabilidadeService
        ) {}
    
    @Get()
    async buscar_todos(): Promise<Usuario[] | Error> {
        try {
            return this.usuariosService.listar_todos();
        } catch (error) {
            return error;
        }
    }

    @Post('habilidades/all')
    async buscar_todos_habilidade(@Body() titulo): Promise<Usuario[] | Error> {
        console.log(titulo);
        try {
            return this.usuariosService.listar_todos_habilidade(titulo.habilidade);
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
}