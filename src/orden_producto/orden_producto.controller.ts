import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdenProductoService } from './orden_producto.service';
import { CreateOrdenProductoDto } from './dto/create-orden_producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden_producto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Orden Producto')
@Controller('orden_producto')
export class OrdenProductoController {
  constructor(private readonly ordenProductoService: OrdenProductoService) {}

  @Post()
  create(@Body() createOrdenProductoDto: CreateOrdenProductoDto) {
    return this.ordenProductoService.create(createOrdenProductoDto);
  }

  @Get()
  findAll() {
    return this.ordenProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordenProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdenProductoDto: UpdateOrdenProductoDto) {
    return this.ordenProductoService.update(+id, updateOrdenProductoDto);
  }

  @Delete(':id/productos/:productId')
  removeProductFromOrder(@Param('id') id: string, @Param('productId') productId: string) {
    return this.ordenProductoService.removeProductFromOrder(+id, +productId);
  }
}