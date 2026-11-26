import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pago } from "./pagoE.js";

@Injectable()
export class ServicioPagos{
    constructor(
        @InjectRepository(Pago)
        private readonly pagoRepo: Repository<Pago>,
    ){}

    async obtener_todos(){
        return await this.pagoRepo.find({relations:{pedido_id:true, cajero_id:true}});
    }

    async obtenerxid(id_pago:number){
        return await this.pagoRepo.findOne({
            where:{id:id_pago}, relations:{pedido_id:true, cajero_id:true},
        });
    }

    async obtenerxpedido(id_pedido:number){
        return await this.pagoRepo.find({
            where:{pedido_id:{id_pedido}}, relations:{pedido_id:true, cajero_id:true},
        });
    }

    async crear(datosPago: Partial<Pago>){
        const nuevo= this.pagoRepo.create(datosPago);
        return await this.pagoRepo.save(nuevo);
    }

    async actualizarEstado(id_pago:number, estado_pago:string){
        await this.pagoRepo.update(id_pago, {estado_pago});
        return await this.obtenerxid(id_pago);
    }
}