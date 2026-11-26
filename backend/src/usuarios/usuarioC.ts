import { Controller, Get, Post, Patch, Delete, Param, Body } from "@nestjs/common";
import { ServicioUsuarios } from "./usuarios.service.js";
import { Usuario } from "./usuarioE.js";

@Controller('usuarios')
export class UsuarioController{
    constructor(private readonly usuariosService: ServicioUsuarios){}

    @Get()
    obtener_todos(){
        return this.usuariosService.obtener_todos();
    }

    @Get(':id')
    obtenerxid(@Param('id') id:string){
        return this.usuariosService.obtenerxid(Number(id));
    }

    @Post()
    crear(@Body() datosUsuario: Partial<Usuario>){
        return this.usuariosService.crear(datosUsuario);
    }

    @Patch(':id')
    actualizar(@Param('id') id:string, @Body() datosNuevos: Partial<Usuario>){
        return this.usuariosService.actualizar(Number(id), datosNuevos);
    }

    @Patch(':id/estado')
    cambiarEstado(@Param('id') id:string, @Body() body:{activo:boolean}){
        return this.usuariosService.cambiarEstado(Number(id), body.activo);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.usuariosService.eliminar(Number(id));
    }
}