import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './clientes/clientes.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';
import { OrdenesModule } from './ordenes/ordenes.module';
import { OrdenProductoModule } from './orden_producto/orden_producto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'tienda_online',
      autoLoadEntities: true,
      synchronize: false,
    }),
    ClientesModule,
    CategoriasModule,
    ProductosModule,
    OrdenesModule,
    OrdenProductoModule,
  ],
})
export class AppModule {}