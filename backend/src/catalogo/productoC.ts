import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from "@nestjs/common";
import { ServicioProduc } from "./catalogo.service.js";
import { Producto } from "./productosE.js";

@Controller('productos')
export class ControlProduc{
    constructor (private readonly ServicioProduc: ServicioProduc){}

@Get()
obtenerTodos(){
    return this.ServicioProduc.obtener_todos();
}

@Get(':id')
obtenerPorId(@Param ('id') id: number){
    return this.ServicioProduc.obtenerxid(id);
}

@Post()
crear(@Body() datosProduc: Partial<Producto> ){
    return this.ServicioProduc.crear(datosProduc);
}

@Patch(':id')
editar(@Param ('id') id:number, @Body() datosNuevos: Partial<Producto> ){
    return this.ServicioProduc.actualizar(id, datosNuevos)
}

@Delete(':id')
eliminar(@Param('id') id: number){
    return this.ServicioProduc.borrar(id);
}

}