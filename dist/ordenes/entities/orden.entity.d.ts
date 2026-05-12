import { Cliente } from '../../clientes/entities/cliente.entity';
import { OrdenProducto } from '../../orden_producto/entities/orden_producto.entity';
export declare class Orden {
    idOrden: number;
    estado: string;
    total: number;
    creadoEn: Date;
    actualizadoEn: Date;
    eliminadoEn: Date;
    cliente: Cliente;
    ordenProductos: OrdenProducto[];
}
