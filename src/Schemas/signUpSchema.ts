import {z} from 'zod';

export const usernameValidation = z
    .string()
    .min(4, "Must me 4 or more")
    .max(8, "Must be more than 8")
    .regex(/^[a-zA-Z0-9_]+$/, "No special character")


export const signUpValidation = z.object({
    username: usernameValidation,
    email: z.email().min(5, "must not be less than 5").max(22,"must not be more than 20"),
    password: z.string().min(7, "must not be less than 5").max(15,"must not be more than 15"),
}) 