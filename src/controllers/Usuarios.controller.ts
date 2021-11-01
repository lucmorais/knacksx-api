import { Body, Controller, Delete, Get, Param, ParamData, Paramtype, Post, Put } from "@nestjs/common";
import { Usuario } from "src/models/Usuarios.model";
import { UsuariosService } from "src/services/Usuarios.service";

@Controller('usuarios')
export class UsuariosController {

    constructor(private usuariosService: UsuariosService) {}

    @Get()
    buscar_todos() {
        try {
            return this.usuariosService.listar_todos();
        } catch (error) {
            return error;
        }
    }
    
    @Get(':id')
    buscar_id(@Param() param) {
        try {
            return this.usuariosService.listar_id(param.id);
        } catch (error) {
            return error;
        }
    }
    
    @Post()
    adicionar(@Body() usuario: Usuario) {
        try {
            this.usuariosService.adicionar(usuario);
            return usuario;
        } catch (error) {
            return error;
        }
    }

    @Put(':id')
    atualizar() {
        
    }

    @Delete(':id')
    deletar() {
        
    }
}