import { Sequelize } from "sequelize-typescript";
import { Experiencia } from "src/experiencia/experiencia.model";
import { Habilidade } from "src/habilidade/habilidade.model";
import { Usuario } from "src/usuario/usuario.model";
import { Usuario_Experiencia } from "src/usuario-experiencia/usuario-experiencia.model";
import { Usuario_Habilidade } from "src/usuario-habilidade/usuario-habilidade.model";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
          const sequelize = new Sequelize({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '29101996',
            database: 'wise',
          });
          sequelize.addModels([
              Usuario,
              Habilidade,
              Usuario_Habilidade,
              Experiencia,
              Usuario_Experiencia,
          ]);
          await sequelize.sync();
          return sequelize;
        },
    },
]