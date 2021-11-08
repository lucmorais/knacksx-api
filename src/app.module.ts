import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { HabilidadesController } from './controllers/Habilidades.controller';
import { UsuariosController } from './controllers/usuarios.controller';
import { HabilidadesService } from './services/habilidades.service';
import { UsuariosService } from './services/usuarios.service';
import { Usuarios } from './models/Usuarios.model';
import { Habilidades } from './models/Habilidades.model';
import { Usuarios_Habilidades } from './models/Usuarios_Habilidades.model';
import { Experiencias } from './models/Experiencias.model';
import { Usuarios_Experiencias } from './models/Usuarios_Experiencias.model';
import { Formacao_Academica } from './models/Formacao_Academica.model';
import { Formacao_Complementar } from './models/Formacao_Complementar.model';
import { Usuarios_Formacao_C } from './models/Usuarios_Formacao_C.model';

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
    }),
    SequelizeModule.forFeature([
      Usuarios, 
      Habilidades,
      Usuarios_Habilidades,
      Experiencias,
      Usuarios_Experiencias,
      Formacao_Academica,
      Formacao_Complementar,
      Usuarios_Formacao_C
    ])
  ],
  controllers: [
    AppController, 
    UsuariosController, 
    HabilidadesController
  ],
  providers: [
    AppService,
    UsuariosService, 
    HabilidadesService
  ],
})
export class AppModule {}
