import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Noti } from "./notificacionesE.js";

@Injectable()
export class ServicioNotificaciones{
    constructor(
        @InjectRepository(Noti)
        private readonly notifRepo: Repository<Noti>,
    ){}

    async obtener_todos(){
        return await this.notifRepo.find({relations:{cajero_id:true, pedido_id:true}});
    }

    async obtenerxusuario(id_usuario:number){
        return await this.notifRepo.find({
            where:{cajero_id:{id_usuario}}, relations:{cajero_id:true, pedido_id:true},
        });
    }

    async obtenerxpedido(id_pedido:number){
        return await this.notifRepo.find({
            where:{pedido_id:{id_pedido}}, relations:{cajero_id:true, pedido_id:true},
        });
    }

    async crear(datosNotif: Partial<Noti>){
        const nuevo= this.notifRepo.create(datosNotif);
        return await this.notifRepo.save(nuevo);
    }

    async eliminar(id_notificacion:number){
        return await this.notifRepo.delete(id_notificacion);
    }
}