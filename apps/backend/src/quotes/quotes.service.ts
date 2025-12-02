/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Quote } from '@repo/types/quotes/quotes-types';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { CreateQuote } from './quotes-schema';
import * as schema from './quotes-schema'
@Injectable()
export class QuotesService {

  constructor(
    @Inject('DRIZZLE') private db: NodePgDatabase<typeof schema>
  ) { }

  async create(createQuoteDto: CreateQuote) {
    const quote = await this.db.insert(schema?.quoteTable).values({ ...createQuoteDto }).returning();
    return quote;
  }

  async findAll() {
    const quotes = await this.db.query.quoteTable?.findMany({
      orderBy: (t, fns) => fns.desc(t.id),
    })
    return quotes;
  }

  findOne(id: number) {
    return `This action returns a #${id} quote`;
  }

  update(id: number, updateQuoteDto: UpdateQuoteDto) {
    return `This action updates a #${id} quote`;
  }

  remove(id: number) {
    return `This action removes a #${id} quote`;
  }
}
