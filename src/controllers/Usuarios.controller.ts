import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { Usuario } from "src/models/usuarios.model";
import { UsuariosService } from "src/services/usuarios.service";

@Controller('usuarios')
export class UsuariosController {

    constructor(private usuariosService: UsuariosService) {}

    @Get()
    buscar_todos(): Usuario[] | Error {
        try {
            return this.usuariosService.listar_todos();
        } catch (error) {
            return error;
        }
    }
    
    @Get(':id')
    buscar_id(@Param() param): Usuario | Error {
        try {
            return this.usuariosService.listar_id(param.id);
        } catch (error) {
            return error;
        }
    }
    
    @Post()
    adicionar(@Body() usuario: Usuario): Usuario | Error {
        try {
            const user  = new Usuario(usuario.id, usuario.nome, usuario.tipo, usuario.email, usuario.data_nascimento, usuario.senha);
            this.usuariosService.adicionar(user);
            return user;
        } catch (error) {
            return error;
        }
    }

    @Put(':id')
    atualizar(@Body() usuario: Usuario): Usuario | Error {
        try {
            return this.usuariosService.atualizar(usuario);
        } catch (error) {
            return error;
        }
    }

    @Delete(':id')
    deletar(@Param() param): Usuario | Error {
        try {
            const usuario = this.usuariosService.deletar(param.id);
            return usuario;
        } catch (error) {
            return error;
        }
    }
}