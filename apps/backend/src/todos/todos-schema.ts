/* eslint-disable prettier/prettier */
import { relations } from "drizzle-orm";
import { text } from "drizzle-orm/pg-core";
import { boolean } from "drizzle-orm/pg-core";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { user } from "src/auth/auth-schema";


export const todoTable = pgTable('todos', {
    id: uuid().primaryKey().defaultRandom(),
    task: text().notNull(),
    user_id: text().references(() => user.id, { onDelete: 'cascade' }).notNull(),
    status: boolean().default(false).notNull()
});

export const todoRelation = relations(todoTable, ({ one }) => ({
    user: one(user, {
        fields: [todoTable?.user_id],
        references: [user?.id]
    })
}))

