/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsOptional } from "class-validator";



export class IdParamDto {
    // @IsNotEmpty()
    // @IsInt()
    @IsOptional()
    id!: number;
}