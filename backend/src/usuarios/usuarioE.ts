import { Entity,Column,PrimaryGeneratedColumn ,ForeignKey,OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Rol } from "./rolesE.js";

@Entity('Usuario')
export class Usuario{
    @PrimaryGeneratedColumn({name:"id"})
        id_usuario: number;

    @Column({name:"nombre", type:"varchar", length:100})
        nombre_usuario: string;

    @Column({name:"apelldio", type:"varchar", length:100})
        apellido_usuario:string;

    @Column({name:"email", type:"varchar", length:150})
        email_usuario: string;

    @Column({name:"psw_hash", type:"varchar", length:255})
        psw_usuario:string;

    @Column({name:"tel", type:"varchar", length:20})
        tel_usuario:string;

    @ManyToOne(()=>Rol)
    @JoinColumn({name:"rol_id"})
        rol: Rol;


    @Column({name:"activo"})
        activo: boolean;
} 