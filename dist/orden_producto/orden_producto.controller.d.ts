import { OrdenProductoService } from './orden_producto.service';
import { CreateOrdenProductoDto } from './dto/create-orden_producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden_producto.dto';
export declare class OrdenProductoController {
    private readonly ordenProductoService;
    constructor(ordenProductoService: OrdenProductoService);
    create(createOrdenProductoDto: CreateOrdenProductoDto): Promise<import("./entities/orden_producto.entity").OrdenProducto>;
    findAll(): Promise<import("./entities/orden_producto.entity").OrdenProducto[]>;
    findOne(id: string): Promise<import("./entities/orden_producto.entity").OrdenProducto>;
    update(id: string, updateOrdenProductoDto: UpdateOrdenProductoDto): Promise<any>;
    removeProductFromOrder(id: string, productId: string): Promise<import("./entities/orden_producto.entity").OrdenProducto>;
}
