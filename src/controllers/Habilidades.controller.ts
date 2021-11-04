import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Habilidade } from "src/models/Habilidades.model";
import { HabilidadesService } from "src/services/habilidades.service";

@Controller('habilidades')
export class HabilidadesController {
 
    constructor (private habilidadesService: HabilidadesService) {}

    @Get()
    buscar_todos(): Habilidade[] | Error {
        try {
            return this.habilidadesService.listar_todos();
        } catch (error) {
            return error;
        }
    }

    @Get(':id')
    buscar_id(@Param() param): Habilidade | Error {
        try {
            return this.habilidadesService.listar_id(param.id)
        } catch (error) {
            return error;
        }
    }

    @Post()
    adicionar(@Body() habilidade: Habilidade): Habilidade | Error {
        try {
            this.habilidadesService.adicionar(habilidade);
            return habilidade;
        } catch (error) {
            return error;
        }
    }

    @Put()
    atualizar(@Body() habilidade: Habilidade): Habilidade | Error {
        try {
            return this.habilidadesService.atualizar(habilidade);
        } catch (error) {
            return error;
        }
    }

    @Delete(':id')
    deletar(@Param() param) {
        try {
            return this.habilidadesService.deletar(param.id);
        } catch (error) {
            return error;
        }
    }
}