import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './productosE.js';
import { Categoria } from './categoriaE.js';

@Module({
  imports: [TypeOrmModule.forFeature([Producto, Categoria])],
  controllers: [],
  providers: [],
})
export class CatalogoModule {}