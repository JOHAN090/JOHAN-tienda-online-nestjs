"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrdenProductoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_orden_producto_dto_1 = require("./create-orden_producto.dto");
class UpdateOrdenProductoDto extends (0, swagger_1.PartialType)(create_orden_producto_dto_1.CreateOrdenProductoDto) {
}
exports.UpdateOrdenProductoDto = UpdateOrdenProductoDto;
//# sourceMappingURL=update-orden_producto.dto.js.map