import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrdenDto {
  @ApiProperty()
  @IsInt()
  idCliente: number;

  @ApiProperty()
  @IsString()
  estado: string;
}