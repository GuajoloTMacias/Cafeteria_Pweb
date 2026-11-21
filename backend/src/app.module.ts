import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './catalogo/productosE.js';
import { Categoria } from './catalogo/categoriaE.js';
import { CatalogoModule } from './catalogo/catalogo.module.js';

//Cafeteria_Pweb
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

      TypeOrmModule.forRootAsync({
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({

        type: 'postgres',
        host: config.get<string>('host'),
        port:config.get<number>('port'),
        username: config.get<string>('usuario'),
        password:  config.get<string>('psw'),
        database: config.get<string>('DB'),
        autoLoadEntities: true,
        synchronize: true,        

        }),

      }),

      CatalogoModule,
      
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
