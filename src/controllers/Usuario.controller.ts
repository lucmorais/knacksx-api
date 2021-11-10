import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from "@nestjs/common";
import { Usuario } from "src/models/Usuario.model";
import { Usuario_Habilidade } from "src/models/UsuarioHabilidade.model";
import { Usuario_Experiencia } from "src/models/UsuarioExperiencia.model";
import { Usuario_FormacaoA } from "src/models/UsuarioFormacaoA.model";
import { Usuario_FormacaoC } from "src/models/UsuarioFormacaoC.model";
import { UsuarioService } from "src/services/Usuario.service";
import { UsuarioExperienciaService } from "src/services/UsuarioExperiencia.service";
import { UsuarioFormacaoAService } from "src/services/UsuarioFormacaoA.service";
import { UsuarioFormacaoCService } from "src/services/UsuarioFormacaoC.service";
import { UsuarioHabilidadeService } from "src/services/UsuarioHabilidade.service";

@Controller('usuarios')
export class UsuarioController {

    constructor(
        private usuariosService: UsuarioService,
        private usuarios_habilidadesService: UsuarioHabilidadeService,
        private usuarios_experienciasService: UsuarioExperienciaService,
        private usuarios_formacao_aService: UsuarioFormacaoAService,
        private usuarios_formacao_cService: UsuarioFormacaoCService
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
    
    @Post('/habilidades')
    async adicionar_usuario_habilidade(@Body() usuario_habilidade: Usuario_Habilidade): Promise<any | Error> {
        try {
            this.usuarios_habilidadesService.adicionar(usuario_habilidade);
            return usuario_habilidade;
        } catch (error) {
            return error;
        }
    }

    @Put('/habilidades/:id')
    async atualizar_usuario_habilidade(@Param() param, @Body() usuario_habilidade: Usuario_Habilidade): Promise<Usuario_Habilidade | Error> {
        try {
            return this.usuarios_habilidadesService.atualizar(usuario_habilidade, param.id);
        } catch (error) {
            return error;
        }
    }

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

    // Usuarios_Formação_Academica
    @Get('/formacao_a/all')
    async buscar_todos_usuarios_formacao_a(): Promise<Usuario_FormacaoA[] | Error> {
        try {
            return this.usuarios_formacao_aService.listar_todos();
        } catch (error) {
            return error;
        }
    }
    
    @Get('/formacao_a/:id')
    async buscar_id_usuario_formacao_a(@Param() param): Promise<Usuario_FormacaoA | Error> {
        try {
            return this.usuarios_formacao_aService.listar_id(param.id);
        } catch (error) {
            return error;
        }
    }
    
    @Post('/formacao_a')
    async adicionar_usuario_formacao_a(@Body() usuario_formacao_a: Usuario_FormacaoA): Promise<any | Error> {
        try {
            this.usuarios_formacao_aService.adicionar(usuario_formacao_a);
            return usuario_formacao_a;
        } catch (error) {
            return error;
        }
    }

    @Put('/formacao_a/:id')
    async atualizar_usuario_formacao_a(@Param() param, @Body() usuario_formacao_a: Usuario_FormacaoA): Promise<Usuario_FormacaoA | Error> {
        try {
            return this.usuarios_formacao_aService.atualizar(usuario_formacao_a, param.id);
        } catch (error) {
            return error;
        }
    }

    @Delete('/formacao_a/:id')
    async deletar_usuario_formacao_a(@Param() param, @Res() res: Response): Promise<any | Error>{
        try {
            this.usuarios_formacao_aService.deletar(param.id);
            return res.json();
        } catch (error) {
            return error;
        }
    }

    // Usuarios_Formação_Complementar
    @Get('/formacao_c/all')
    async buscar_todos_usuarios_formacao_c(): Promise<Usuario_FormacaoC[] | Error> {
        try {
            return this.usuarios_formacao_cService.listar_todos();
        } catch (error) {
            return error;
        }
    }
    
    @Get('/formacao_c/:id')
    async buscar_id_usuario_formacao_c(@Param() param): Promise<Usuario_FormacaoC | Error> {
        try {
            return this.usuarios_formacao_cService.listar_id(param.id);
        } catch (error) {
            return error;
        }
    }
    
    @Post('/formacao_c')
    async adicionar_usuario_formacao_c(@Body() usuario_formacao_c: Usuario_FormacaoC): Promise<any | Error> {
        try {
            this.usuarios_formacao_cService.adicionar(usuario_formacao_c);
            return usuario_formacao_c;
        } catch (error) {
            return error;
        }
    }

    @Put('/formacao_c/:id')
    async atualizar_usuario_formacao_c(@Param() param, @Body() usuario_formacao_c: Usuario_FormacaoC): Promise<Usuario_FormacaoC | Error> {
        try {
            return this.usuarios_formacao_cService.atualizar(usuario_formacao_c, param.id);
        } catch (error) {
            return error;
        }
    }

    @Delete('/formacao_c/:id')
    async deletar_usuario_formacao_c(@Param() param, @Res() res: Response): Promise<any | Error>{
        try {
            this.usuarios_formacao_cService.deletar(param.id);
            return res.json();
        } catch (error) {
            return error;
        }
    }
}