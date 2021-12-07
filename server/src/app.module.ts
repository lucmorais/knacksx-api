import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DataBaseModule,
    AuthModule,
    UsuarioModule,
    HabilidadeModule,
    ExperienciaModule,
    UsuarioExperienciaModule,
    UsuarioHabilidadeModule,
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      },
      defaults: {
        from: '"No Reply" <no-reply@appwise>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [
    AppController, 
    UsuarioController, 
    HabilidadeController,
    ExperienciaController
  ]
})
export class AppModule {}
