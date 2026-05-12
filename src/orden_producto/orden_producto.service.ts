import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdenProducto } from './entities/orden_producto.entity';
import { CreateOrdenProductoDto } from './dto/create-orden_producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden_producto.dto';

@Injectable()
export class OrdenProductoService {
  constructor(
    @InjectRepository(OrdenProducto)
    private readonly ordenProductoRepository: Repository<OrdenProducto>,
  ) {}

  async create(createOrdenProductoDto: CreateOrdenProductoDto) {
    const ordenProducto = this.ordenProductoRepository.create({
      ...createOrdenProductoDto,
      orden: { idOrden: createOrdenProductoDto.idOrden },
      producto: { idProducto: createOrdenProductoDto.idProducto },
    });
    return await this.ordenProductoRepository.save(ordenProducto);
  }

  async findAll() {
    return await this.ordenProductoRepository.find({ relations: ['orden', 'producto'] });
  }

  async findOne(id: number) {
    const ordenProducto = await this.ordenProductoRepository.findOne({
      where: { idOrdenProducto: id },
      relations: ['orden', 'producto'],
    });
    if (!ordenProducto) {
      throw new NotFoundException(`OrdenProducto con id ${id} no encontrado`);
    }
    return ordenProducto;
  }

  async update(id: number, updateOrdenProductoDto: UpdateOrdenProductoDto) {
    const ordenProducto = await this.findOne(id);
    const updateData = { ...updateOrdenProductoDto } as any;

    if (updateOrdenProductoDto.idOrden) {
      updateData.orden = { idOrden: updateOrdenProductoDto.idOrden };
      delete updateData.idOrden;
    }
    if (updateOrdenProductoDto.idProducto) {
      updateData.producto = { idProducto: updateOrdenProductoDto.idProducto };
      delete updateData.idProducto;
    }

    const updated = Object.assign(ordenProducto, updateData);
    return await this.ordenProductoRepository.save(updated);
  }

  async removeProductFromOrder(idOrden: number, idProducto: number) {
    const ordenProducto = await this.ordenProductoRepository.findOne({
      where: { 
        orden: { idOrden: idOrden } as any, 
        producto: { idProducto: idProducto } as any
      }
    });
    
    if (!ordenProducto) {
      throw new NotFoundException(`Producto ${idProducto} en la orden ${idOrden} no encontrado`);
    }
    
    return await this.ordenProductoRepository.softRemove(ordenProducto);
  }
}