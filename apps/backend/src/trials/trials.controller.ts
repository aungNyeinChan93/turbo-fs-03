/* eslint-disable prettier/prettier */
import { type TrialOneSearchParams } from './types/trialOne.types';
import { Body, Controller, Get, Param, ParseIntPipe, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TrialsService } from './trials.service';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';
import { TrialOnePipe } from './pipe/trial-one.pipe';
import { CreateTrialDto } from './dto/create-trial.dto';
import { IdParamDto } from './dto/idParam.dto';
import { IdParamPipe } from './pipe/IdParam.pipe';

// @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, groups: ['user'] })) // controller|route lvl
@Controller('trials')
export class TrialsController {
  constructor(private readonly trialsService: TrialsService) { }

  @Get('one/:id')
  @AllowAnonymous()
  @UsePipes(new ValidationPipe({ whitelist: true, groups: ['user'] })) // method lvl
  tialOne(
    @Query(TrialOnePipe) query: TrialOneSearchParams,
    @Body() createTrialDto: CreateTrialDto,
    @Param('id') id: string) {
    return { query, createTrialDto, id };
  }
}
