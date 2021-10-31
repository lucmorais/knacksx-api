import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosController } from './controllers/Usuarios.controller';

@Module({
  imports: [],
  controllers: [AppController, UsuariosController],
  providers: [AppService],
})
export class AppModule {}
