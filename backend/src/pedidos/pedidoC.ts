import { Controller, Get, Post, Patch, Delete, Param, Body } from "@nestjs/common";
import { ServicioPedidos } from "./pedidos.service.js";
import { Pedido } from "./pedidoE.js";

@Controller('pedidos')
export class PedidoController{
    constructor(private readonly pedidosService: ServicioPedidos){}

    @Get()
    obtener_todos(){
        return this.pedidosService.obtener_todos();
    }

    @Get(':id')
    obtenerxid(@Param('id') id:string){
        return this.pedidosService.obtenerxid(Number(id));
    }

    @Get('usuario/:idUsuario')
    obtenerxusuario(@Param('idUsuario') idUsuario:string){
        return this.pedidosService.obtenerxusuario(Number(idUsuario));
    }

    @Post()
    crear(@Body() datosPedido: Partial<Pedido>){
        return this.pedidosService.crear(datosPedido);
    }

    @Patch(':id')
    actualizar(@Param('id') id:string, @Body() datosNuevos: Partial<Pedido>){
        return this.pedidosService.actualizar(Number(id), datosNuevos);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.pedidosService.eliminar(Number(id));
    }
}