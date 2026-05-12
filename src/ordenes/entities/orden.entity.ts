import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity';
import { OrdenProducto } from '../../orden_producto/entities/orden_producto.entity';

@Entity('orden')
export class Orden {
  @PrimaryGeneratedColumn()
  idOrden: number;

  @Column()
  estado: string;

  @Column('decimal', { default: 0 })
  total: number;

  @CreateDateColumn({ name: 'creadoEn' })
  creadoEn: Date;

  @UpdateDateColumn({ name: 'actualizadoEn' })
  actualizadoEn: Date;

  @DeleteDateColumn({ name: 'eliminadoEn' })
  eliminadoEn: Date;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'idCliente' })
  cliente: Cliente;

  @OneToMany(() => OrdenProducto, ordenProducto => ordenProducto.orden)
  ordenProductos: OrdenProducto[];
}