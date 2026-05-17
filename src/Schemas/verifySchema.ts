import {z} from 'zod';

export const verifySchema = z.object({
    code: z.string().min(7, "min 7 characters must be present")
})