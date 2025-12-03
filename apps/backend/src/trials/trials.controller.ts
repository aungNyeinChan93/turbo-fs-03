/* eslint-disable prettier/prettier */
import { type TrialOneSearchParams } from './types/trialOne.types';
import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TrialsService } from './trials.service';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';
import { TrialOnePipe } from './pipe/trial-one.pipe';
import { CreateTrialDto } from './dto/create-trial.dto';
import { IdParamDto } from './dto/idParam.dto';
import { IdParamPipe } from './pipe/IdParam.pipe';
import { trialSchema, type Trial } from './dto/create-trial-zod.dto';
import { ZodValidationPipe } from 'nestjs-zod'
import { CustomeZodValidationPipe } from './pipe/custome-zod-validation.pipe';

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
    @Param('id', IdParamPipe) id: number) {
    return { query, createTrialDto, id };
  }

  @Post('two')
  @AllowAnonymous()
  trialTwo(@Body(new ZodValidationPipe(trialSchema)) request: Trial) {
    return { request };
  }
}
