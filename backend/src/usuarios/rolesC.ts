import { Controller, Get, Post, Patch, Delete, Param, Body } from "@nestjs/common";
import { ServicioRoles } from "./usuarios.service.js";
import { Rol } from "./rolesE.js";

@Controller('roles')
export class RolesController{
    constructor(private readonly rolesService: ServicioRoles){}

    @Get()
    obtener_todos(){
        return this.rolesService.obtener_todos();
    }

    
    @Get(':id')
    obtenerxid(@Param('id') id:string){
        return this.rolesService.obtenerxid(Number(id));
    }

    @Post()
    crear(@Body() datosRol: Partial<Rol>){
        return this.rolesService.crear(datosRol);
    }

    @Patch(':id')
    actualizar(@Param('id') id:string, @Body() datosNuevos: Partial<Rol>){
        return this.rolesService.actualizar(Number(id), datosNuevos);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.rolesService.eliminar(Number(id));
    }
}