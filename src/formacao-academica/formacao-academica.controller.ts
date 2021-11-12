import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from "@nestjs/common";
import { Response } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Formacao_Academica } from "src/formacao-academica/formacao-academica.model";
import { FormacaoAcademicaService } from "src/formacao-academica/formacao-academica.service";

@UseGuards(JwtAuthGuard)
@Controller('formacao_a')
export class FormacaoAcademicaController {

    constructor(private formacao_academicaService: FormacaoAcademicaService) {}

    @Get()
    async buscar_todos(): Promise<Formacao_Academica[] | Error> {
        try {
            return this.formacao_academicaService.listar_todos();
        } catch (error) {
            return error;
        }
    }
    
    @Get(':id')
    async buscar_id(@Param() param): Promise<Formacao_Academica | Error> {
        try {
            return this.formacao_academicaService.listar_id(param.id);
        } catch (error) {
            return error;
        }
    }
    
    @Post()
    async adicionar(@Body() formacao_a: Formacao_Academica): Promise<any | Error> {
        try {
            this.formacao_academicaService.adicionar(formacao_a);
            return formacao_a;
        } catch (error) {
            return error;
        }
    }

    @Put(':id')
    async atualizar(@Param() param, @Body() formacao_a: Formacao_Academica): Promise<Formacao_Academica | Error> {
        try {
            return this.formacao_academicaService.atualizar(formacao_a, param.id);
        } catch (error) {
            return error;
        }
    }

    @Delete(':id')
    async deletar(@Param() param, @Res() res: Response): Promise<any | Error>{
        try {
            this.formacao_academicaService.deletar(param.id);
            return res.json();
        } catch (error) {
            return error;
        }
    }
}