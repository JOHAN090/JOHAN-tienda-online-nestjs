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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const typeorm_1 = require("typeorm");
const categoria_entity_1 = require("../../categorias/entities/categoria.entity");
const orden_producto_entity_1 = require("../../orden_producto/entities/orden_producto.entity");
let Producto = class Producto {
};
exports.Producto = Producto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Producto.prototype, "idProducto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], Producto.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Producto.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creadoEn' }),
    __metadata("design:type", Date)
], Producto.prototype, "creadoEn", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'actualizadoEn' }),
    __metadata("design:type", Date)
], Producto.prototype, "actualizadoEn", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'eliminadoEn' }),
    __metadata("design:type", Date)
], Producto.prototype, "eliminadoEn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categoria_entity_1.Categoria),
    (0, typeorm_1.JoinColumn)({ name: 'idCategoria' }),
    __metadata("design:type", categoria_entity_1.Categoria)
], Producto.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orden_producto_entity_1.OrdenProducto, ordenProducto => ordenProducto.producto),
    __metadata("design:type", Array)
], Producto.prototype, "ordenProductos", void 0);
exports.Producto = Producto = __decorate([
    (0, typeorm_1.Entity)('producto')
], Producto);
//# sourceMappingURL=producto.entity.js.map