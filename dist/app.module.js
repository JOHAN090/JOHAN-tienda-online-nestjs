"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const clientes_module_1 = require("./clientes/clientes.module");
const categorias_module_1 = require("./categorias/categorias.module");
const productos_module_1 = require("./productos/productos.module");
const ordenes_module_1 = require("./ordenes/ordenes.module");
const orden_producto_module_1 = require("./orden_producto/orden_producto.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '123456',
                database: 'tienda_online',
                autoLoadEntities: true,
                synchronize: false,
            }),
            clientes_module_1.ClientesModule,
            categorias_module_1.CategoriasModule,
            productos_module_1.ProductosModule,
            ordenes_module_1.OrdenesModule,
            orden_producto_module_1.OrdenProductoModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map