import { Entity, Column, PrimaryGeneratedColumn, ForeignKey,ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "../usuarios/usuarioE.js";

@Entity('Pedido')
    export class Pedido{
        @PrimaryGeneratedColumn({name:"id"})
            id_pedido:number;

        @ManyToOne(()=>Usuario)
        @JoinColumn({name:"usuario_id"})
            usuario_id:Usuario;
        
        @Column({name:"estado", type:"varchar", length:20})
            estado:string;

        @Column({name:"subtotal", type:"numeric", precision:10, scale:2})
            subtotal:number;

        @Column({name:"descuento", type:"numeric", precision:10, scale:2})
            descuento:number;

        @Column({name:"total", type:"numeric", precision:10, scale:2})
            total:number;

        @Column({name:"notas", type:"text"})
            notas:string;

        @Column({name:"F_creacion", type:"timestamp", default:() => "CURRENT_TIMESTAMP"})
            F_creacion: Date;

        @Column({name:"F_actualizacion", type:"timestamp", default:()=> "CURRENT_TIMESTAMP"})
            F_actualizacion: Date;

    }
