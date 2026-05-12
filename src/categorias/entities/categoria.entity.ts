import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('categoria')
export class Categoria {
  @PrimaryGeneratedColumn()
  idCategoria: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @CreateDateColumn({ name: 'creadoEn' })
  creadoEn: Date;

  @UpdateDateColumn({ name: 'actualizadoEn' })
  actualizadoEn: Date;

  @DeleteDateColumn({ name: 'eliminadoEn' })
  eliminadoEn: Date;
}