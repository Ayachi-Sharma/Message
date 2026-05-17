import {z} from 'zod';

export const signInSchem = z.object({
    identifier: z.email(),
    password: z.string(),
})