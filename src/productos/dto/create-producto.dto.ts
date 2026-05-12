import { IsString, IsNumber, IsInt, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductoDto {
  @ApiProperty()
  @IsInt()
  idCategoria: number;

  @ApiProperty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsString()
  descripcion: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  precio: number;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  stock: number;
}