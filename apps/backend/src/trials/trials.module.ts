/* eslint-disable prettier/prettier */
import { Module, ValidationPipe } from '@nestjs/common';
import { TrialsService } from './trials.service';
import { TrialsController } from './trials.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [TrialsController],
  providers: [
    { //module lvl validation
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      })
    },
    TrialsService,
  ],
})
export class TrialsModule { }
