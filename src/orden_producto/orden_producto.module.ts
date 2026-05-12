import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenProductoService } from './orden_producto.service';
import { OrdenProductoController } from './orden_producto.controller';
import { OrdenProducto } from './entities/orden_producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrdenProducto])],
  controllers: [OrdenProductoController],
  providers: [OrdenProductoService],
})
export class OrdenProductoModule {}