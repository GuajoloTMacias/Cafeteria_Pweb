import { Entity, Column, PrimaryGeneratedColumn, ForeignKey,ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Pedido } from "./pedidoE.js";
import { Usuario } from "../usuarios/usuarioE.js";
import { Producto } from "../catalogo/productosE.js";

@Entity('Items_pedido')
    export class Items_pedido{

        @PrimaryGeneratedColumn({name: "id"})
            id_ItemsP: number;

        @ManyToOne(()=>Pedido)
        @JoinColumn({name:"pedido_id"})
            pedido_id:Pedido;

        @ManyToOne(()=>Producto)
        @JoinColumn({name:"producto_id"})
            producto_id:Producto;
        
        @Column({name:"cantidad"})
            cantidad:number;

        @Column({name:"precio_unitario", type:"numeric", precision:10, scale:2})
            precio_U:number;

        @Column({name:"subtotal", type:"numeric", precision:10, scale:2})
            subtotal:number; 

    }