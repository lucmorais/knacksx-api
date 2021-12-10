import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from "@nestjs/common";
import { Response } from "@nestjs/common";
import { Usuario } from "src/usuario/usuario.model";
import { UsuarioService } from "src/usuario/usuario.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller('usuarios')
export class UsuarioController {

    constructor(private usuariosService: UsuarioService) {}
    
    @UseGuards(JwtAuthGuard)
    @Get('todos')
    async buscar_todos(): Promise<Usuario[] | Error> {
        try {
            return this.usuariosService.listar_todos();
        } catch (error) {
            return error;
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('habilidades/experiencias')
    async buscar_todos_habilidade_experiencia(): Promise<Usuario[] | Error> {
        try {
            return this.usuariosService.buscar_todos_habilidade_experiencia();
        } catch (error) {
            return error;
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('experiencia/todos')
    async listar_todos_experiencia(): Promise<Usuario[] | Error> {
        try {
            return this.usuariosService.listar_todos_experiencia();
        } catch (error) {
            return error;
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async listar_todos_habilidade(): Promise<Usuario[] | Error> {
        try {
            return this.usuariosService.listar_todos_habilidade();
        } catch (error) {
            return error;
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('habilidades/all')
    async buscar_todos_habilidade(@Body() titulo): Promise<Usuario[] | Error> {
        try {
            return this.usuariosService.buscar_todos_habilidade(titulo.habilidade);
        } catch (error) {
            return error;
        }
    }
    
    @UseGuards(JwtAuthGuard)
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

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async atualizar(@Param() param, @Body() usuario: Usuario): Promise<Usuario | Error> {
        try {
            return this.usuariosService.atualizar(usuario, param.id);
        } catch (error) {
            return error;
        }
    }

    @Put()
    async atualizar_senha(@Body() dados) {
        try {
            return this.usuariosService.atualizar_senha(dados.codigo, dados.senha);
        } catch (error) {   
            return error;
        }
    }

    @UseGuards(JwtAuthGuard)
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