import { IsInt, IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrdenProductoDto {
  @ApiProperty()
  @IsInt()
  idOrden: number;

  @ApiProperty()
  @IsInt()
  idProducto: number;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  cantidad: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  precio_unitario: number;
}