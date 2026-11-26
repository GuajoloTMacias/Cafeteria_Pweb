import { Entity, Column, PrimaryGeneratedColumn, ForeignKey,ManyToOne, JoinColumn } from "typeorm";
import { Pedido } from "./pedidoE.js";
import { Usuario } from "../usuarios/usuarioE.js";

@Entity('Estatus')
    export class Estatus{

        @PrimaryGeneratedColumn({name:"id"}) //sirve para el historial
            id:number;

        @ManyToOne(()=>Pedido)
        @JoinColumn({name:"pedido_id"})
            pedido_id:Pedido;
        
        @Column({name:"estado", type:"varchar", length:20})
            estado: string;

        @ManyToOne(()=>Usuario)
        @JoinColumn({name:"usuario_id"})
            usuario_id:Usuario;    

        @Column({name:"fecha_cambio", type:"timestamp", default:() => "CURRENT_TIMESTAMP"})
            fecha_cambio:Date;
        
        @Column({name:"notas", type:"text"})
            notas:string;

    }