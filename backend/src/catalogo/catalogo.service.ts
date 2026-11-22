import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './categoriaE.js';
import { Producto } from './productosE.js';
import { Repository } from 'typeorm';

@Injectable()
export class ServicioCat{
    constructor(
        @InjectRepository(Categoria)
        private readonly categoriaRepo: Repository<Categoria>,
    ){}

    async obtener_todas(){
        return await this.categoriaRepo.find();
    }

    async obtenerxid(id_Cat: number){
        return await this.categoriaRepo.findOneBy({id_Cat});
    }

    async crear(datosCat: Partial<Categoria>){
        const nueva= this.categoriaRepo.create(datosCat);
        return await this.categoriaRepo.save(nueva);
    }

    async actualizar(id_Cat:number, datosNuevos: Partial<Categoria>){
        await this.categoriaRepo.update(id_Cat, datosNuevos);
        return this.obtenerxid(id_Cat);
    }
    async eliminar(id_Cat: number){
        return await this.categoriaRepo.delete(id_Cat);
    }
}


@Injectable()
export class ServicioProduc{
    constructor (
        @InjectRepository(Producto)
        private readonly productoRepo: Repository<Producto>,

    ){}


    async obtener_todos(){
        return await this.productoRepo.find();
    }

    async obtenerxid(id_Produc: number){
        return await this.productoRepo.findOneBy({id_Produc});
    }

    async crear(datosProduc: Partial<Producto>){
        const nuevo= this.productoRepo.create(datosProduc);
        return await this.productoRepo.save(nuevo);
    }

    async actualizar(id_Produc: number, datosNuevos:Partial<Producto>){
        await this.productoRepo.update(id_Produc,datosNuevos);
        return this.obtenerxid(id_Produc);
    }

    async borrar(id_Produc:number){
        return await this.productoRepo.delete(id_Produc);

    }
}
