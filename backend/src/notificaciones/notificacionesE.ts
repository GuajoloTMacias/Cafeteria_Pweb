import { Entity, Column, PrimaryGeneratedColumn, ForeignKey,ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "../usuarios/usuarioE.js";
import { Pedido } from "../pedidos/pedidoE.js";


@Entity('noti')
    export class Noti{

        @PrimaryGeneratedColumn({name:"id"})
            id:number;

        @ManyToOne(()=>Usuario)
        @JoinColumn({ name:"cajero_id" })
            cajero_id: Usuario;        
        
        @ManyToOne(()=>Pedido)
        @JoinColumn({name:"pedido_id"})
            pedido_id:Pedido;

        @Column({name:"titulo", type:"text"})
            titulo:string;
        
        @Column({name:"mensaje", type:"text"})
            mensaje:string;

}