import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Categoria } from '../../categorias/entities/categoria.entity';
import { OrdenProducto } from '../../orden_producto/entities/orden_producto.entity';

@Entity('producto')
export class Producto {
  @PrimaryGeneratedColumn()
  idProducto: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column('decimal')
  precio: number;

  @Column('int')
  stock: number;

  @CreateDateColumn({ name: 'creadoEn' })
  creadoEn: Date;

  @UpdateDateColumn({ name: 'actualizadoEn' })
  actualizadoEn: Date;

  @DeleteDateColumn({ name: 'eliminadoEn' })
  eliminadoEn: Date;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'idCategoria' })
  categoria: Categoria;

  @OneToMany(() => OrdenProducto, ordenProducto => ordenProducto.producto)
  ordenProductos: OrdenProducto[];
}