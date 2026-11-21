import {Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from "typeorm";
import { Categoria } from "./categoriaE.js";

@Entity("Productos")
export class Producto{
    @PrimaryGeneratedColumn({name:"id"})
    id_Produc: number;

    @Column({name: "nombre_producto", type:"text"})
    nombre_P: string;

    @ManyToOne(()=> Categoria)
    @JoinColumn({name:"categoria_id"})
    cat: Categoria;

    @Column({name: "descripcion", type:"text"})
    descripcion: string;

    @Column({name: "disponibilidad"})
    dispo: boolean;

    @Column({name:"precio", type: "numeric", precision: 10, scale:2})
    precio: number;
}