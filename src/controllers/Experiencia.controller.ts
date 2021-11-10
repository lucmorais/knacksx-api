import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from "@nestjs/common";
import { Experiencia } from "src/models/Experiencia.model";
import { ExperienciaService } from "src/services/Experiencia.service";


@Controller('experiencias')
export class ExperienciaController {

    constructor(private experienciasService: ExperienciaService) {}

    @Get()
    async buscar_todos(): Promise<Experiencia[] | Error> {
        try {
            return this.experienciasService.listar_todos();
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
    
    @Post()
    async adicionar(@Body() experiencia: Experiencia): Promise<any | Error> {
        try {
            this.experienciasService.adicionar(experiencia);
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

    @Delete(':id')
    async deletar(@Param() param, @Res() res: Response): Promise<any | Error>{
        try {
            this.experienciasService.deletar(param.id);
            return res.json();
        } catch (error) {
            return error;
        }
    }
}