import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from "@nestjs/common";
import { Habilidade } from "src/models/Habilidade.model";
import { HabilidadeService } from "src/services/Habilidade.service";

@Controller('habilidades')
export class HabilidadeController {

    constructor(private habilidadesService: HabilidadeService) {}

    @Get()
    async buscar_todos(): Promise<Habilidade[] | Error> {
        try {
            return this.habilidadesService.listar_todos();
        } catch (error) {
            return error;
        }
    }
    
    @Get(':id')
    async buscar_id(@Param() param): Promise<Habilidade | Error> {
        try {
            return this.habilidadesService.listar_id(param.id);
        } catch (error) {
            return error;
        }
    }
    
    @Post()
    async adicionar(@Body() habilidade: Habilidade): Promise<any | Error> {
        try {
            this.habilidadesService.adicionar(habilidade);
            return habilidade;
        } catch (error) {
            return error;
        }
    }

    @Put(':id')
    async atualizar(@Param() param, @Body() habilidade: Habilidade): Promise<Habilidade | Error> {
        try {
            return this.habilidadesService.atualizar(habilidade, param.id);
        } catch (error) {
            return error;
        }
    }

    @Delete(':id')
    async deletar(@Param() param, @Res() res: Response): Promise<any | Error>{
        try {
            this.habilidadesService.deletar(param.id);
            return res.json();
        } catch (error) {
            return error;
        }
    }
}