import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity('Rol')
    export class Rol{
        @PrimaryGeneratedColumn({name:"id"})
            id_rol: number;
        @Column({name:"nombre_rol", type:"varchar", length:50})
            nombre_rol: string;
        @Column({name:"descripcion", type:"text"})
            descripcion_rol:string;
    }