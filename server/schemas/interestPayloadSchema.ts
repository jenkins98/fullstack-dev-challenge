import { z } from "zod";

export const interestPayloadSchema = z.object({
  initialSavings: z.number(),
  monthlyDeposit: z.number(),
  interestRate: z.number(),
});

export type InterestPayload = z.infer<typeof interestPayloadSchema>;
