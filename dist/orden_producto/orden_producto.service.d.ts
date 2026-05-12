import { Repository } from 'typeorm';
import { OrdenProducto } from './entities/orden_producto.entity';
import { CreateOrdenProductoDto } from './dto/create-orden_producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden_producto.dto';
export declare class OrdenProductoService {
    private readonly ordenProductoRepository;
    constructor(ordenProductoRepository: Repository<OrdenProducto>);
    create(createOrdenProductoDto: CreateOrdenProductoDto): Promise<OrdenProducto>;
    findAll(): Promise<OrdenProducto[]>;
    findOne(id: number): Promise<OrdenProducto>;
    update(id: number, updateOrdenProductoDto: UpdateOrdenProductoDto): Promise<any>;
    removeProductFromOrder(idOrden: number, idProducto: number): Promise<OrdenProducto>;
}
