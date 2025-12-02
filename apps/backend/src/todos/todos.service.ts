/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './todos-schema'
import { type UserSession } from '@thallesp/nestjs-better-auth';



@Injectable()
export class TodosService {

  constructor(
    @Inject('DRIZZLE') private db: NodePgDatabase<typeof schema>
  ) { }

  async create(createTodoDto: CreateTodoDto, session: UserSession) {
    const todo = await this.db.insert(schema?.todoTable).values({
      ...createTodoDto, user_id: session?.user?.id
    }).returning();
    return todo;
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
