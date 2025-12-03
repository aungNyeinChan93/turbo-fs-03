import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IdParamPipe implements PipeTransform {
  transform(value) {
    return Number(value);
  }
}
