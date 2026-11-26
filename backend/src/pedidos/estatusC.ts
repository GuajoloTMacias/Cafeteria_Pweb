import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { ServicioEstatus } from "./pedidos.service.js";
import { Estatus } from "./estatusE.js";

@Controller('estatus')
export class EstatusController{
    constructor(private readonly estatusService: ServicioEstatus){}

    @Get()
    obtener_todos(){
        return this.estatusService.obtener_todos();
    }

    @Get('pedido/:idPedido')
    obtenerxpedido(@Param('idPedido') idPedido:string){
        return this.estatusService.obtenerxpedido(Number(idPedido));
    }

    @Post()
    crear(@Body() datosEstatus: Partial<Estatus>){
        return this.estatusService.crear(datosEstatus);
    }
}