"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenProductoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const orden_producto_entity_1 = require("./entities/orden_producto.entity");
let OrdenProductoService = class OrdenProductoService {
    constructor(ordenProductoRepository) {
        this.ordenProductoRepository = ordenProductoRepository;
    }
    async create(createOrdenProductoDto) {
        const ordenProducto = this.ordenProductoRepository.create({
            ...createOrdenProductoDto,
            orden: { idOrden: createOrdenProductoDto.idOrden },
            producto: { idProducto: createOrdenProductoDto.idProducto },
        });
        return await this.ordenProductoRepository.save(ordenProducto);
    }
    async findAll() {
        return await this.ordenProductoRepository.find({ relations: ['orden', 'producto'] });
    }
    async findOne(id) {
        const ordenProducto = await this.ordenProductoRepository.findOne({
            where: { idOrdenProducto: id },
            relations: ['orden', 'producto'],
        });
        if (!ordenProducto) {
            throw new common_1.NotFoundException(`OrdenProducto con id ${id} no encontrado`);
        }
        return ordenProducto;
    }
    async update(id, updateOrdenProductoDto) {
        const ordenProducto = await this.findOne(id);
        const updateData = { ...updateOrdenProductoDto };
        if (updateOrdenProductoDto.idOrden) {
            updateData.orden = { idOrden: updateOrdenProductoDto.idOrden };
            delete updateData.idOrden;
        }
        if (updateOrdenProductoDto.idProducto) {
            updateData.producto = { idProducto: updateOrdenProductoDto.idProducto };
            delete updateData.idProducto;
        }
        const updated = Object.assign(ordenProducto, updateData);
        return await this.ordenProductoRepository.save(updated);
    }
    async removeProductFromOrder(idOrden, idProducto) {
        const ordenProducto = await this.ordenProductoRepository.findOne({
            where: {
                orden: { idOrden: idOrden },
                producto: { idProducto: idProducto }
            }
        });
        if (!ordenProducto) {
            throw new common_1.NotFoundException(`Producto ${idProducto} en la orden ${idOrden} no encontrado`);
        }
        return await this.ordenProductoRepository.softRemove(ordenProducto);
    }
};
exports.OrdenProductoService = OrdenProductoService;
exports.OrdenProductoService = OrdenProductoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(orden_producto_entity_1.OrdenProducto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrdenProductoService);
//# sourceMappingURL=orden_producto.service.js.map