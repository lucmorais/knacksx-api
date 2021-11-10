import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { Usuario } from './models/Usuario.model';
import { Habilidade } from './models/Habilidade.model';
import { Usuario_Habilidade } from './models/UsuarioHabilidade.model';
import { Experiencia } from './models/Experiencia.model';
import { Usuario_Experiencia } from './models/UsuarioExperiencia.model';
import { Formacao_Academica } from './models/FormacaoAcademica.model';
import { Formacao_Complementar } from './models/FormacaoComplementar.model';
import { Usuario_FormacaoC } from './models/UsuarioFormacaoC.model';
import { Usuario_FormacaoA } from './models/UsuarioFormacaoA.model';
import { HabilidadeController } from './controllers/Habilidade.controller';
import { UsuarioController } from './controllers/Usuario.controller';
import { ExperienciaController } from './controllers/Experiencia.controller';
import { FormacaoAcademicaController } from './controllers/FormacaoAcademica.controller';
import { FormacaoComplementarController } from './controllers/FormacaoComplementar.controller';
import { HabilidadeService } from './services/Habilidade.service';
import { UsuarioService } from './services/Usuario.service';
import { UsuarioHabilidadeService } from './services/UsuarioHabilidade.service';
import { UsuarioExperienciaService } from './services/UsuarioExperiencia.service';
import { UsuarioFormacaoAService } from './services/UsuarioFormacaoA.service';
import { UsuarioFormacaoCService } from './services/UsuarioFormacaoC.service';
import { ExperienciaService } from './services/Experiencia.service';
import { FormacaoAcademicaService } from './services/FormacaoAcademica.service';
import { FormacaoComplementarService } from './services/FormacaoComplementar.service';

@Module({
  imports: [ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BD,
      password: process.env.SENHA_BD,
      database: 'wise',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([
      Usuario, 
      Habilidade,
      Usuario_Habilidade,
      Experiencia,
      Usuario_Experiencia,
      Formacao_Academica,
      Formacao_Complementar,
      Usuario_FormacaoC,
      Usuario_FormacaoA
    ])
  ],
  controllers: [
    AppController, 
    UsuarioController, 
    HabilidadeController,
    ExperienciaController,
    FormacaoAcademicaController,
    FormacaoComplementarController
  ],
  providers: [
    AppService,
    UsuarioService, 
    HabilidadeService,
    ExperienciaService,
    FormacaoAcademicaService,
    FormacaoComplementarService,
    UsuarioHabilidadeService,
    UsuarioExperienciaService,
    UsuarioFormacaoAService,
    UsuarioFormacaoCService
  ],
})
export class AppModule {}
