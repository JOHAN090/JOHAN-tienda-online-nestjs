import { Repository } from 'typeorm';
import { Orden } from './entities/orden.entity';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
export declare class OrdenesService {
    private readonly ordenRepository;
    constructor(ordenRepository: Repository<Orden>);
    create(createOrdenDto: CreateOrdenDto): Promise<Orden>;
    findAll(): Promise<Orden[]>;
    findOne(id: number): Promise<Orden>;
    update(id: number, updateOrdenDto: UpdateOrdenDto): Promise<any>;
    remove(id: number): Promise<Orden>;
}
