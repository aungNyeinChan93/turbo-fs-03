/* eslint-disable prettier/prettier */
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { text } from "drizzle-orm/pg-core";
import { boolean } from "drizzle-orm/pg-core";
import { uuid } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";


export type Quote = InferSelectModel<typeof quoteTable>;
export type CreateQuote = InferInsertModel<typeof quoteTable>;
export type UpdateQuote = Partial<Quote>;

export const quoteTable = pgTable('quotes', {
    id: uuid().primaryKey().defaultRandom(),
    quote: text().notNull(),
    status: boolean().default(false).notNull()
});

