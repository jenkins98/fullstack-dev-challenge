import { z } from 'zod'

export const payloadSchema = z.object({
    years: z.string().array(),
    amounts: z.string().array(),
})
