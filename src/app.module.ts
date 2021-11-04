import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HabilidadesController } from './controllers/Habilidades.controller';
import { UsuariosController } from './controllers/usuarios.controller';
import { HabilidadesService } from './services/habilidades.service';
import { UsuariosService } from './services/usuarios.service';

@Module({
  imports: [],
  controllers: [AppController, UsuariosController, HabilidadesController],
  providers: [AppService, UsuariosService, HabilidadesService],
})
export class AppModule {}
