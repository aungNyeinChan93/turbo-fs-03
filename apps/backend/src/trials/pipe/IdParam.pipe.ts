import { Injectable, PipeTransform } from '@nestjs/common';
import { IdParamDto } from '../dto/idParam.dto';

@Injectable()
export class IdParamPipe implements PipeTransform {
  transform({ id }: IdParamDto) {
    return Number(id);
  }
}
