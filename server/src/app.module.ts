import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HabilidadeController } from './habilidade/habilidade.controller';
import { UsuarioController } from './usuario/usuario.controller';
import { ExperienciaController } from './experiencia/experiencia.controller';
import { AuthModule } from './auth/auth.module';
import { DataBaseModule } from './config/database/database.module';
import { UsuarioModule } from './usuario/usuario.module';
import { HabilidadeModule } from './habilidade/habilidade.module';
import { ExperienciaModule } from './experiencia/experiencia.module';
import { UsuarioExperienciaModule } from './usuario-experiencia/usuario-experiencia.module';
import { UsuarioHabilidadeModule } from './usuario-habilidade/usuario-habilidade.module';

@Module({
  imports: [
    DataBaseModule,
    AuthModule,
    UsuarioModule,
    HabilidadeModule,
    ExperienciaModule,
    UsuarioExperienciaModule,
    UsuarioHabilidadeModule
  ],
  controllers: [
    AppController, 
    UsuarioController, 
    HabilidadeController,
    ExperienciaController
  ]
})
export class AppModule {}
