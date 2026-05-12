import { OrdenesService } from './ordenes.service';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
export declare class OrdenesController {
    private readonly ordenesService;
    constructor(ordenesService: OrdenesService);
    create(createOrdenDto: CreateOrdenDto): Promise<import("./entities/orden.entity").Orden>;
    findAll(): Promise<import("./entities/orden.entity").Orden[]>;
    findOne(id: string): Promise<import("./entities/orden.entity").Orden>;
    update(id: string, updateOrdenDto: UpdateOrdenDto): Promise<any>;
    remove(id: string): Promise<import("./entities/orden.entity").Orden>;
}
