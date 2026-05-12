import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    const producto = this.productoRepository.create({
      ...createProductoDto,
      categoria: { idCategoria: createProductoDto.idCategoria },
    });
    return await this.productoRepository.save(producto);
  }

  async findAll() {
    return await this.productoRepository.find({ relations: ['categoria'] });
  }

  async findOne(id: number) {
    const producto = await this.productoRepository.findOne({
      where: { idProducto: id },
      relations: ['categoria'],
    });
    if (!producto) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }
    return producto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const producto = await this.findOne(id);
    const updateData = { ...updateProductoDto } as any;
    
    if (updateProductoDto.idCategoria) {
      updateData.categoria = { idCategoria: updateProductoDto.idCategoria };
      delete updateData.idCategoria;
    }

    const updated = Object.assign(producto, updateData);
    return await this.productoRepository.save(updated);
  }

  async remove(id: number) {
    const producto = await this.findOne(id);
    return await this.productoRepository.softRemove(producto);
  }
}