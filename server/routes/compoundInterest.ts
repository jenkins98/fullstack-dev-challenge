import { Router } from "express";
import { YEARS } from "../constants";
import { interestPayloadSchema } from "../schemas/interestPayloadSchema";

const router = Router();

router.post("/compound-interest", (req, res) => {
  try {
    const { initialSavings, monthlyDeposit, interestRate } =
      interestPayloadSchema.parse(req.body);

    const monthlyRate = interestRate / 100 / 12;

    const years: string[] = [];
    const amounts: string[] = [];
    let currentAmount = initialSavings;

    //iterations of 5 years
    Array.from({ length: YEARS / 5 + 1 }, (_, index) => {
      //retrieve correct year
      const year = index * 5;

      // For year 0, just use initial amount
      if (year === 0) {
        years.push(JSON.stringify(year));
        amounts.push(JSON.stringify(Math.round(initialSavings * 100) / 100));
        return;
      }

      //retrieve total months for every 5 year period
      const totalMonths = 5 * 12;
      // Calculate compound interest for each month up to the current year
      for (let month = 0; month < totalMonths; month++) {
        // Add monthly deposit
        currentAmount += monthlyDeposit;
        // Then apply monthly interest rate
        currentAmount = currentAmount * (1 + monthlyRate);
      }

      years.push(JSON.stringify(year));
      amounts.push(JSON.stringify(Math.round(currentAmount * 100) / 100));
    });

    res.status(200).json({ years, amounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

export default router;
