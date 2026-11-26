import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "./usuarioE.js";
import { Rol } from "./rolesE.js";
import { Repository } from "typeorm";

@Injectable()
export class ServicioRoles{
    constructor(
        @InjectRepository(Rol)
        private readonly rolRepo: Repository<Rol>,
    ){}

    async obtener_todos(){
        return await this.rolRepo.find();
    }

    async obtenerxid(id_rol:number){
        return await this.rolRepo.findOneBy({id_rol});
    }

    async crear(datosRol: Partial<Rol>){
        const nuevo= this.rolRepo.create(datosRol);
        return await this.rolRepo.save(nuevo);
    }

    async actualizar(id_rol: number, datosNuevos: Partial<Rol>){
        await this.rolRepo.update(id_rol, datosNuevos);
        return this.obtenerxid(id_rol);
    }

    async eliminar(id_rol: number){
        return await this.rolRepo.delete(id_rol);
    }
}


@Injectable()
export class ServicioUsuarios{
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepo: Repository<Usuario>,
    ){}

    async obtener_todos(){
        return await this.usuarioRepo.find({relations: {rol:true}});
    }

    async obtenerxid(id_usuario:number){
        return await this.usuarioRepo.findOne({
            where: {id_usuario}, relations: {rol:true},
        })
    }

    async buscarxCorreo(email_usuario:string){
        return await this.usuarioRepo.findOne({
            where:{email_usuario},relations: {rol:true},
        })
    }

    async crear(datosUsuario: Partial<Usuario>){
        const nuevo= this.usuarioRepo.create(datosUsuario);
        return await this.usuarioRepo.save(nuevo);
    }

    async actualizar(id_usuario: number, datosNuevos: Partial<Usuario>){
        await this.usuarioRepo.update(id_usuario, datosNuevos);
        return this.obtenerxid(id_usuario);
    }

    async cambiarEstado(id_usuario:number, activo:boolean){
        await this.usuarioRepo.update(id_usuario, {activo});
        return await this.obtenerxid(id_usuario);
    }

    async eliminar(id_usuario: number){
        return await this.usuarioRepo.delete(id_usuario);
    }

}