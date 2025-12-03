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
    const result = await this.schema.parseAsync(value)
    if (!result) {
      throw new BadRequestException({
        statusCode: 400,
      });
    }
    return result
  }
}
