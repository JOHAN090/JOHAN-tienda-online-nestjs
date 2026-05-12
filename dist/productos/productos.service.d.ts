import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductosService {
    private readonly productoRepository;
    constructor(productoRepository: Repository<Producto>);
    create(createProductoDto: CreateProductoDto): Promise<Producto>;
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto>;
    update(id: number, updateProductoDto: UpdateProductoDto): Promise<any>;
    remove(id: number): Promise<Producto>;
}
