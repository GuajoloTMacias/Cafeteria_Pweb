import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pedido } from "./pedidoE.js";
import { Items_pedido } from "./Item_pedidoE.js";
import { Estatus } from "./estatusE.js";

@Injectable()
export class ServicioPedidos{
    constructor(
        @InjectRepository(Pedido)
        private readonly pedidoRepo: Repository<Pedido>,
    ){}

    async obtener_todos(){
        return await this.pedidoRepo.find({relations:{usuario_id:true}});
    }

    async obtenerxid(id_pedido:number){
        return await this.pedidoRepo.findOne({
            where:{id_pedido}, relations:{usuario_id:true},
        });
    }

    async obtenerxusuario(id_usuario:number){
        return await this.pedidoRepo.find({
            where:{usuario_id:{id_usuario}}, relations:{usuario_id:true},
        });
    }

    async crear(datosPedido: Partial<Pedido>){
        const nuevo= this.pedidoRepo.create(datosPedido);
        return await this.pedidoRepo.save(nuevo);
    }

    async actualizar(id_pedido:number, datosNuevos: Partial<Pedido>){
        await this.pedidoRepo.update(id_pedido, {
            ...datosNuevos,
            F_actualizacion: new Date(),
        });
        return await this.obtenerxid(id_pedido);
    }

    async eliminar(id_pedido:number){
        return await this.pedidoRepo.delete(id_pedido);
    }
}


@Injectable()
export class ServicioItemsPedido{
    constructor(
        @InjectRepository(Items_pedido)
        private readonly itemsRepo: Repository<Items_pedido>,
    ){}

    async obtenerxpedido(id_pedido:number){
        return await this.itemsRepo.find({
            where:{pedido_id:{id_pedido}}, relations:{pedido_id:true, producto_id:true},
        });
    }

    async crear(datosItem: Partial<Items_pedido>){
        const nuevo= this.itemsRepo.create(datosItem);
        return await this.itemsRepo.save(nuevo);
    }

    async actualizar(id_ItemsP:number, datosNuevos: Partial<Items_pedido>){
        await this.itemsRepo.update(id_ItemsP, datosNuevos);
        return await this.itemsRepo.findOne({
            where:{id_ItemsP}, relations:{pedido_id:true, producto_id:true},
        });
    }

    async eliminar(id_ItemsP:number){
        return await this.itemsRepo.delete(id_ItemsP);
    }
}


@Injectable()
export class ServicioEstatus{
    constructor(
        @InjectRepository(Estatus)
        private readonly estatusRepo: Repository<Estatus>,
    ){}

    async obtener_todos(){
        return await this.estatusRepo.find({relations:{pedido_id:true, usuario_id:true}});
    }

    async obtenerxpedido(id_pedido:number){
        return await this.estatusRepo.find({
            where:{pedido_id:{id_pedido}}, relations:{pedido_id:true, usuario_id:true},
        });
    }

    async crear(datosEstatus: Partial<Estatus>){
        const nuevo= this.estatusRepo.create(datosEstatus);
        return await this.estatusRepo.save(nuevo);
    }
}