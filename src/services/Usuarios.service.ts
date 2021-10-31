import { Injectable } from "@nestjs/common";
import { Usuario } from "src/models/Usuarios.model";

@Injectable()
export class UsuariosService {
    private readonly usuarios: Usuario[] = [];

    adicionar(usuario: Usuario) {
        this.usuarios.push(usuario);
    }

    listar_todos() {
        return this.usuarios;
    }
}