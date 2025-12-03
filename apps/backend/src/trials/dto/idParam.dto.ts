/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber } from "class-validator";



export class IdParamDto {
    @IsNotEmpty()
    @IsNumber()
    id!: number;
}