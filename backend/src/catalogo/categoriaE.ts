import {Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";


@Entity("Categoria")
export class Categoria{
    @PrimaryGeneratedColumn({name:"id"})
    id_Cat: number;

    @Column({name:"nombre_categoria", type:"text"})
    nombre_cat:string;

}