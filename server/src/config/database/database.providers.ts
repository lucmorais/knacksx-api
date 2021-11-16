import { Sequelize } from "sequelize-typescript";
import { Experiencia } from "src/experiencia/experiencia.model";
import { Formacao_Academica } from "src/formacao-academica/formacao-academica.model";
import { Formacao_Complementar } from "src/formacao-complementar/formacao-complementar.model";
import { Habilidade } from "src/habilidade/habilidade.model";
import { Usuario } from "src/usuario/usuario.model";
import { Usuario_Experiencia } from "src/usuario-experiencia/usuario-experiencia.model";
import { Usuario_FormacaoA } from "src/usuario-formacao-a/usuario-formacao-a.model";
import { Usuario_FormacaoC } from "src/usuario-formacao-c/usuario-formacao-c.model";
import { Usuario_Habilidade } from "src/usuario-habilidade/usuario-habilidade.model";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
          const sequelize = new Sequelize({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: process.env.USUARIO_BD,
            password: process.env.SENHA_BD,
            database: 'wise',
          });
          sequelize.addModels([
              Usuario,
              Habilidade,
              Usuario_Habilidade,
              Experiencia,
              Usuario_Experiencia,
              Formacao_Academica,
              Formacao_Complementar,
              Usuario_FormacaoC,
              Usuario_FormacaoA
          ]);
          await sequelize.sync();
          return sequelize;
        },
    },
]