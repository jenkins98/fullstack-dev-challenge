import express from "express";
import cors from "cors";
import { interestPayloadSchema } from "./schemas/interestPayloadSchema";
import { YEARS } from "./constants";
const app = express();

app.set("port", process.env.PORT || 3001);
app.use(cors());
app.use(express.json());

app.post("/api/compound-interest", (req, res) => {
  try {
    const { initialSavings, monthlyDeposit, interestRate } =
      interestPayloadSchema.parse(req.body);

    // Convert annual rate to monthly
    const monthlyRate = interestRate / 100 / 12; // Convert percentage to decimal and then to monthly rate

    const years: string[] = [];
    const amounts: string[] = [];
    let currentAmount = initialSavings;

    //iterations of 5 years
    Array.from({ length: YEARS / 5 + 1 }, (_, index) => {
      //retrieve correct year
      const year = index * 5;

      // Calculate compound interest for each month up to the current year
      const totalMonths = 5 * 12;
      for (let month = 0; month < totalMonths; month++) {
        // Add monthly deposit
        currentAmount += monthlyDeposit;
        // Apply monthly compound interest
        currentAmount *= 1 + monthlyRate;
      }

      years.push(JSON.stringify(year));
      amounts.push(JSON.stringify(Math.round(currentAmount * 100) / 100));
    });

    res.json({ years, amounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
