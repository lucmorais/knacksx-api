import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from "@nestjs/common";
import { Response } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Experiencia } from "src/experiencia/experiencia.model";
import { ExperienciaService } from "src/experiencia/experiencia.service";
import { UsuarioExperienciaService } from "src/usuario-experiencia/usuario-experiencia.service";

@Controller('experiencias')
export class ExperienciaController {

    constructor(
        private experienciasService: ExperienciaService,
        private usuarios_experienciasService: UsuarioExperienciaService
    ) {}

    @Get('/all/:id')
    async buscar_todos(@Param() param): Promise<Experiencia[] | Error> {
        try {
            return this.experienciasService.listar_todos(param.id);
        } catch (error) {
            return error;
        }
    }
    
    @Get(':id')
    async buscar_id(@Param() param): Promise<Experiencia | Error> {
        try {
            return this.experienciasService.listar_id(param.id);
        } catch (error) {
            return error;
        }
    }
    
    @Post(':id')
    async adicionar(@Body() experiencia: Experiencia, @Param() param): Promise<any | Error> {
        try {
            const num = await this.experienciasService.adicionar(experiencia);
            this.usuarios_experienciasService.adicionar(param.id, num);
            return experiencia;
        } catch (error) {
            return error;
        }
    }

    @Put(':id')
    async atualizar(@Param() param, @Body() experiencia: Experiencia): Promise<Experiencia | Error> {
        try {
            return this.experienciasService.atualizar(experiencia, param.id);
        } catch (error) {
            return error;
        }
    }

    @Delete(':id_usuario/u_e/:id_experiencia')
    async deletar(@Param() param, @Res() res: Response): Promise<any | Error>{
        this.usuarios_experienciasService.deletar(param.id_usuario, param.id_experiencia);
        try {
            this.experienciasService.deletar(param.id_experiencia);
            return res.json();
        } catch (error) {
            return error;
        }
    }
}