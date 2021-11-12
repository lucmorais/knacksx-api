import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HabilidadeController } from './habilidade/habilidade.controller';
import { UsuarioController } from './usuario/usuario.controller';
import { ExperienciaController } from './experiencia/experiencia.controller';
import { FormacaoAcademicaController } from './formacao-academica/formacao-academica.controller';
import { FormacaoComplementarController } from './formacao-complementar/formacao-complementar.controller';
import { AuthModule } from './auth/auth.module';
import { DataBaseModule } from './config/database/database.module';
import { UsuarioModule } from './usuario/usuario.module';
import { HabilidadeModule } from './habilidade/habilidade.module';
import { ExperienciaModule } from './experiencia/experiencia.module';
import { FormacaoAModule } from './formacao-academica/formacao-academica.module';
import { FormacaoCModule } from './formacao-complementar/formacao-complementar.module';
import { UsuarioExperienciaModule } from './usuario-experiencia/usuario-experiencia.module';
import { UsuarioHabilidadeModule } from './usuario-habilidade/usuario-habilidade.module';
import { UsuarioFormacaoAModule } from './usuario-formacao-a/usuario-formacao-a.module';
import { UsuarioFormacaoCModule } from './usuario-formacao-c/usuario-formacao-c.module';

@Module({
  imports: [
    DataBaseModule,
    AuthModule,
    UsuarioModule,
    HabilidadeModule,
    ExperienciaModule,
    FormacaoAModule,
    FormacaoCModule,
    UsuarioExperienciaModule,
    UsuarioHabilidadeModule,
    UsuarioFormacaoAModule,
    UsuarioFormacaoCModule

  ],
  controllers: [
    AppController, 
    UsuarioController, 
    HabilidadeController,
    ExperienciaController,
    FormacaoAcademicaController,
    FormacaoComplementarController
  ]
})
export class AppModule {}
