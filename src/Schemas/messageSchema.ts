import {z} from 'zod';

export const messageSchema = z.object({
    content: z.string()
            .min(10, "must be 10 characters")
            .max(500, "must not exceed 500 characters")
})