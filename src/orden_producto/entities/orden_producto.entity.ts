import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Orden } from '../../ordenes/entities/orden.entity';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('orden_producto')
export class OrdenProducto {
  @PrimaryGeneratedColumn()
  idOrdenProducto: number;

  @Column('int')
  cantidad: number;

  @Column('decimal')
  precio_unitario: number;

  @CreateDateColumn({ name: 'creadoEn' })
  creadoEn: Date;

  @UpdateDateColumn({ name: 'actualizadoEn' })
  actualizadoEn: Date;

  @DeleteDateColumn({ name: 'eliminadoEn' })
  eliminadoEn: Date;

  @ManyToOne(() => Orden, orden => orden.ordenProductos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idOrden' })
  orden: Orden;

  @ManyToOne(() => Producto, producto => producto.ordenProductos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idProducto' })
  producto: Producto;
}