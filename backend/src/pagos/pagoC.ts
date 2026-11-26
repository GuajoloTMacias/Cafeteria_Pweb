import { Controller, Get, Post, Patch, Param, Body } from "@nestjs/common";
import { ServicioPagos } from "./pagos.service.js";
import { Pago } from "./pagoE.js";

@Controller('pagos')
export class PagosController{
    constructor(private readonly pagosService: ServicioPagos){}

    @Get()
    obtener_todos(){
        return this.pagosService.obtener_todos();
    }

    @Get(':id')
    obtenerxid(@Param('id') id:string){
        return this.pagosService.obtenerxid(Number(id));
    }

    @Get('pedido/:idPedido')
    obtenerxpedido(@Param('idPedido') idPedido:string){
        return this.pagosService.obtenerxpedido(Number(idPedido));
    }

    @Post()
    crear(@Body() datosPago: Partial<Pago>){
        return this.pagosService.crear(datosPago);
    }

    @Patch(':id/estado')
    actualizarEstado(@Param('id') id:string, @Body() body:{estado_pago:string}){
        return this.pagosService.actualizarEstado(Number(id), body.estado_pago);
    }
}