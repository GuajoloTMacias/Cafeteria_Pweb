import { Entity, Column, PrimaryGeneratedColumn, ForeignKey,ManyToOne, JoinColumn } from "typeorm";
import { Pedido } from "../pedidos/pedidoE.js";
import { Usuario } from "../usuarios/usuarioE.js";

@Entity('Pago')
    export class Pago{

        @PrimaryGeneratedColumn({name:"id"})
            id:number;
        
        @ManyToOne(()=>Pedido)
        @JoinColumn({name:"pedido_id"})
            pedido_id:Pedido;

        @ManyToOne(()=>Usuario)
        @JoinColumn({ name:"cajero_id" })
            cajero_id: Usuario;

        @Column({name:"metodo_pago", type:"varchar", length:30})
            metodo_pago:string;

        @Column({name:"monto", type:"numeric", precision:10, scale:2})
            monto:number;

        @Column({name:"estado_pago", type:"varchar", length:30})
            estado_pago:string;

        @Column({name:"fecha_pago", type:"timestamp", default:()=> "CURRENT_TIMESTAMP"})
            fecha_pago:Date;

    }