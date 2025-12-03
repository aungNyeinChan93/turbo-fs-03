/* eslint-disable prettier/prettier */
import z from "zod";


export const trialSchema = z.object({
    name: z.string().min(1, { message: 'name field is required!' }),
    status: z.boolean().default(false).nullable()
});

export type Trial = z.infer<typeof trialSchema>;
export type UpdateTrial = Partial<Trial>
