import { Controller, Get, Post, Patch, Delete, Param, Body } from "@nestjs/common";
import { ServicioItemsPedido } from "./pedidos.service.js";
import { Items_pedido } from "./Item_pedidoE.js";

@Controller('items-pedido')
export class ItemPedidoController{
    constructor(private readonly itemsService: ServicioItemsPedido){}

    @Get('pedido/:idPedido')
    obtenerxpedido(@Param('idPedido') idPedido:string){
        return this.itemsService.obtenerxpedido(Number(idPedido));
    }

    @Post()
    crear(@Body() datosItem: Partial<Items_pedido>){
        return this.itemsService.crear(datosItem);
    }

    @Patch(':id')
    actualizar(@Param('id') id:string, @Body() datosNuevos: Partial<Items_pedido>){
        return this.itemsService.actualizar(Number(id), datosNuevos);
    }

    
    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.itemsService.eliminar(Number(id));
    }
}