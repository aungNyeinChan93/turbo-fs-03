import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { type TrialOneSearchParams } from '../types/trialOne.types';

@Injectable()
export class TrialOnePipe implements PipeTransform {
  transform(value: TrialOneSearchParams, _metadata: ArgumentMetadata) {
    return { ...value, status: value?.status === 'true' };
  }
}
