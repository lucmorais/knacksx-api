import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { Usuario } from "src/models/Usuarios.model";

@Controller('usuarios')
export class UsuariosController {
    
    @Get()
    buscar_todos() {

    }
    
    @Get(':id')
    buscar_id() {

    }
    
    @Post()
    adicionar(@Body() usuario: Usuario) {
        try {
            const novo_usuario = new Usuario(
                usuario.nome,
                usuario.tipo,
                usuario.email,
                usuario.data_nascimento,
                usuario.senha
            );
            console.log(novo_usuario);
        } catch (error) {
            console.log(error)
        }
    }



    @Put(':id')
    atualizar() {

    }

    @Delete(':id')
    deletar() {
        
    }
}