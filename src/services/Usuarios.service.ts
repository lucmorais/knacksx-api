import { Injectable } from "@nestjs/common";
import { Usuario } from "src/models/usuarios.model";

@Injectable()
export class UsuariosService {
    private usuarios: Usuario[] = [];

    adicionar(usuario: Usuario) {
        this.usuarios.push(usuario);
    }

    listar_todos() {
        return this.usuarios;
    }

    listar_id(id: number) {
        return this.usuarios.find(user => user.id == id);
    }

    atualizar(id: number) {
    
    }

    deletar() {

    }
}