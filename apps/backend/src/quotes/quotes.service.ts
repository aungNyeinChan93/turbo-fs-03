import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Quote } from '@repo/types/quotes/quotes-types';

@Injectable()
export class QuotesService {

  private quotes: Quote[] = [];

  create(createQuoteDto: CreateQuoteDto) {
    this.quotes.push({ ...createQuoteDto });
    return this.quotes;
  }

  findAll() {
    return this.quotes;
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
