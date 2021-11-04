import { Injectable } from "@nestjs/common";
import { Usuario } from "src/models/usuarios.model";

@Injectable()
export class UsuariosService {
    private usuarios: Usuario[] = [];

    adicionar(usuario: Usuario) {
        this.usuarios.push(usuario);
    }

    listar_todos(): Usuario[] {
        return this.usuarios;
    }

    listar_id(id: number): Usuario {
        return this.usuarios.find(user => user.id == id);
    }

    atualizar(usuario: Usuario): Usuario {
        return usuario;
    }

    deletar(id: number): Usuario {
        const usuario = this.usuarios.find(user => user.id == id);
        this.usuarios.splice(this.usuarios.indexOf(usuario), 1);
        return usuario;
    }
}