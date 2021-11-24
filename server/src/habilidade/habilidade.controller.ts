import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from "@nestjs/common";
import { Response, Request } from "@nestjs/common";
import { AnyAaaaRecord } from "dns";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Habilidade } from "src/habilidade/habilidade.model";
import { HabilidadeService } from "src/habilidade/habilidade.service";
import { UsuarioHabilidadeService } from "src/usuario-habilidade/usuario-habilidade.service";

@UseGuards(JwtAuthGuard)
@Controller('habilidades')
export class HabilidadeController {

    constructor(
        private habilidadesService: HabilidadeService,
        private usuarios_habilidadesService: UsuarioHabilidadeService
    ) {}
    
    @Get('/all/:id')
    async buscar_todos(@Param() param, @Request() req): Promise<Habilidade[] | Error> {
        try {
            return this.habilidadesService.listar_todos(param.id);
        } catch (error) {
            return error;
        }
    }

    @Get()
    async obter_todos(@Request() req): Promise<Habilidade[] | Error> {
        try {
            return this.habilidadesService.obter_todos();
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
    
    @Post(':id')
    async adicionar(@Body() habilidade: Habilidade, @Param() param): Promise<any | Error> {
        try {
            const num = await this.habilidadesService.adicionar(habilidade);
            this.usuarios_habilidadesService.adicionar(param.id, num);
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

    @Delete(':id_usuario/u_h/:id_habilidade')
    async deletar(@Param() param, @Res() res: Response): Promise<any | Error>{
        this.usuarios_habilidadesService.deletar(param.id_usuario, param.id_habilidade);
        try {
            this.habilidadesService.deletar(param.id_habilidade);
            return res.json();
        } catch (error) {
            return error;
        }
    }
}