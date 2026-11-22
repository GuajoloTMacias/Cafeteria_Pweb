import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './productosE.js';
import { Categoria } from './categoriaE.js';
import { ServicioCat, ServicioProduc } from "./catalogo.service.js";
import { ControlCat } from "./categoriasC.js";
import { ControlProduc } from "./productoC.js";


@Module({
  imports: [TypeOrmModule.forFeature([Producto, Categoria])],
  controllers: [
    ControlCat,
    ControlProduc

  ],

  providers: [
    ServicioCat,
    ServicioProduc,
  ],
})
export class CatalogoModule {}