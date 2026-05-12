import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orden } from './entities/orden.entity';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';

@Injectable()
export class OrdenesService {
  constructor(
    @InjectRepository(Orden)
    private readonly ordenRepository: Repository<Orden>,
  ) {}

  async create(createOrdenDto: CreateOrdenDto) {
    const orden = this.ordenRepository.create({
      ...createOrdenDto,
      cliente: { idCliente: createOrdenDto.idCliente },
    });
    return await this.ordenRepository.save(orden);
  }

  async findAll() {
    return await this.ordenRepository.find({ relations: ['cliente'] });
  }

  async findOne(id: number) {
    const orden = await this.ordenRepository.findOne({
      where: { idOrden: id },
      relations: ['cliente', 'ordenProductos', 'ordenProductos.producto'],
    });
    if (!orden) {
      throw new NotFoundException(`Orden con id ${id} no encontrada`);
    }
    return orden;
  }

  async update(id: number, updateOrdenDto: UpdateOrdenDto) {
    const orden = await this.findOne(id);
    const updateData = { ...updateOrdenDto } as any;

    if (updateOrdenDto.idCliente) {
      updateData.cliente = { idCliente: updateOrdenDto.idCliente };
      delete updateData.idCliente;
    }

    const updated = Object.assign(orden, updateData);
    return await this.ordenRepository.save(updated);
  }

  async remove(id: number) {
    const orden = await this.findOne(id);
    return await this.ordenRepository.softRemove(orden);
  }
}