import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HabilidadesController } from './controllers/Habilidades.controller';
import { UsuariosController } from './controllers/usuarios.controller';
import { HabilidadesService } from './services/habilidades.service';
import { UsuariosService } from './services/usuarios.service';
import { Usuario } from './models/usuarios.model';
import { Habilidade } from './models/habilidades.model';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  imports: [ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.HOST,
      port: parseInt(process.env.PORTA),
      username: process.env.USUARIO_BD,
      password: process.env.SENHA_BD,
      database: process.env.BD,
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([Usuario, Habilidade])
  ],
  controllers: [AppController, UsuariosController, HabilidadesController],
  providers: [AppService, UsuariosService, HabilidadesService],
})
export class AppModule {}
