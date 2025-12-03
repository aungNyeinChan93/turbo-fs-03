/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";



export class CreateTrialDto {
    @IsNotEmpty({ message: 'name field is required' })
    @Length(2, 20, { groups: ['admin'] })
    @Length(1, 10, { groups: ['user'] })
    name!: string;
    @IsOptional({ always: true })
    desc!: string;

    @IsOptional({ groups: ['admin'] })
    @IsString({ groups: ['user'] })
    password!: string;
}