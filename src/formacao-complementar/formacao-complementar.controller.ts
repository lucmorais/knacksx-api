import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from "@nestjs/common";
import { Formacao_Complementar } from "src/formacao-complementar/formacao-complementar.model";
import { FormacaoComplementarService } from "src/formacao-complementar/formacao-complementar.service";


@Controller('formacao_c')
export class FormacaoComplementarController {

    constructor(private formacao_complementarService: FormacaoComplementarService) {}

    @Get()
    async buscar_todos(): Promise<Formacao_Complementar[] | Error> {
        try {
            return this.formacao_complementarService.listar_todos();
        } catch (error) {
            return error;
        }
    }
    
    @Get(':id')
    async buscar_id(@Param() param): Promise<Formacao_Complementar | Error> {
        try {
            return this.formacao_complementarService.listar_id(param.id);
        } catch (error) {
            return error;
        }
    }
    
    @Post()
    async adicionar(@Body() formacao_c: Formacao_Complementar): Promise<any | Error> {
        try {
            this.formacao_complementarService.adicionar(formacao_c);
            return formacao_c;
        } catch (error) {
            return error;
        }
    }

    @Put(':id')
    async atualizar(@Param() param, @Body() formacao_c: Formacao_Complementar): Promise<Formacao_Complementar | Error> {
        try {
            return this.formacao_complementarService.atualizar(formacao_c, param.id);
        } catch (error) {
            return error;
        }
    }

    @Delete(':id')
    async deletar(@Param() param, @Res() res: Response): Promise<any | Error>{
        try {
            this.formacao_complementarService.deletar(param.id);
            return res.json();
        } catch (error) {
            return error;
        }
    }
}