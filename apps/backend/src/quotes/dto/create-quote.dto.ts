/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Quote } from '@repo/types/quotes/quotes-types';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateQuoteDto implements Quote {
    @IsOptional()
    id?: string | number | undefined;

    @IsNotEmpty()
    @IsString()
    quote!: string;

    @Transform(({ value }) => value === 'true')
    @IsBoolean()
    status!: boolean | string;
}
