import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from "@nestjs/common";
import { ServicioCat } from "./catalogo.service.js";
import { Categoria } from "./categoriaE.js";


@Controller('categorias')
export class ControlCat{
    constructor(private readonly ServicioCat: ServicioCat){}


@Get()
obtenerTodas() {
    return this.ServicioCat.obtener_todas();
}

@Get(':id')
obtenerPorId(@Param('id') id:number){
    return this.ServicioCat.obtenerxid(id);
}

@Post()
crear(@Body() datosCat: Partial<Categoria>){
    return this.ServicioCat.crear(datosCat);
}

@Patch(':id')
actualizar( @Param('id') id: number, @Body() datosNuevos: Partial<Categoria>){
    return this.ServicioCat.actualizar(id, datosNuevos);
}

@Delete(':id')
eliminar(@Param('id') id: number){
    return this.ServicioCat.eliminar(id);
}


}