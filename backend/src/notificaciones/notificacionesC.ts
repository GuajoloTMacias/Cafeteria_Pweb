import { Controller, Get, Post, Delete, Param, Body } from "@nestjs/common";
import { ServicioNotificaciones } from "./notificaciones.service.js";
import { Noti } from "./notificacionesE.js";

@Controller('notificaciones')
export class NotificacionesController{
    constructor(private readonly notifService: ServicioNotificaciones){}

    @Get()
    obtener_todos(){
        return this.notifService.obtener_todos();
    }

    @Get('usuario/:idUsuario')
    obtenerxusuario(@Param('idUsuario') idUsuario:string){
        return this.notifService.obtenerxusuario(Number(idUsuario));
    }

    @Get('pedido/:idPedido')
    obtenerxpedido(@Param('idPedido') idPedido:string){
        return this.notifService.obtenerxpedido(Number(idPedido));
    }

    @Post()
    crear(@Body() datosNotif: Partial<Noti>){
        return this.notifService.crear(datosNotif);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.notifService.eliminar(Number(id));
    }
}