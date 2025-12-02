import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { DrizzleModule } from 'src/drizzle/drizzle.module';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [DrizzleModule],
})
export class TodosModule { }
