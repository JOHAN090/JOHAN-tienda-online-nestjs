import { Categoria } from '../../categorias/entities/categoria.entity';
import { OrdenProducto } from '../../orden_producto/entities/orden_producto.entity';
export declare class Producto {
    idProducto: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    creadoEn: Date;
    actualizadoEn: Date;
    eliminadoEn: Date;
    categoria: Categoria;
    ordenProductos: OrdenProducto[];
}
