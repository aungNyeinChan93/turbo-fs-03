/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */
import { Injectable, PipeTransform } from '@nestjs/common';
import { CreateQuoteDto } from '../dto/create-quote.dto';

@Injectable()
export class BooleanPipe implements PipeTransform {
  transform(value: CreateQuoteDto) {
    return { ...value, status: value?.status === 'true' };
  }

  toBoolean(value: string): boolean {
    return ["true", "yes", "1", "on"].includes(value.toLowerCase());
  }
}
