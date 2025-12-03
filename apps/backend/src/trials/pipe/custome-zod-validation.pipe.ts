/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { type Trial } from '../dto/create-trial-zod.dto';
import { ZodType } from 'zod';

@Injectable()
export class CustomeZodValidationPipe implements PipeTransform {

  constructor(
    private schema: ZodType<Trial>,
  ) { }

  async transform(value: Trial) {
    const { success, data, error } = await this.schema.safeParseAsync(value)
    if (!success) throw new BadRequestException(JSON.parse(error?.message))
    // if (success) throw new BadRequestException(error?.format())
    return data;
  }
}
