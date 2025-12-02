/* eslint-disable prettier/prettier */
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { todoTable } from "../todos-schema";


export type Todo = InferSelectModel<typeof todoTable>;
export type CreateTodo = InferInsertModel<typeof todoTable>;
export type UpdateTodo = Partial<Todo>;