import { z } from 'zod'
import { create } from 'zustand'
import { payloadSchema } from '../schemas'

const API_URL = import.meta.env.VITE_API_URL
const initialXAxisData = Array.from({ length: 11 }, (_, i) => (i * 5).toString())
const initialYAxisData = Array.from({ length: 11 }, (_, i) => '0')

interface SavingsStore {
    initialSavings: number
    setInitialSavings: (initialSavings: number) => void
    monthlyDeposit: number
    setMonthlyDeposit: (monthlyDeposit: number) => void
    interestRate: number
    setInterestRate: (interestRate: number) => void
    graphData: { amounts: string[]; years: string[] }
    setGraphData: (graphData: { amounts: string[]; years: string[] }) => void
    calculateInterest: () => void
}

const useSavingsStore = create<SavingsStore>((set, get) => ({
    initialSavings: 0,
    monthlyDeposit: 0,
    interestRate: 0,
    graphData: { amounts: initialXAxisData, years: initialYAxisData },
    setInitialSavings: (initialSavings: number) => set((state) => ({ ...state, initialSavings })),
    setMonthlyDeposit: (monthlyDeposit: number) => set((state) => ({ ...state, monthlyDeposit })),
    setInterestRate: (interestRate: number) => set((state) => ({ ...state, interestRate })),
    calculateInterest: async () => {
        const response = await fetch(`${API_URL}/api/compound-interest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                initialSavings: get().initialSavings,
                monthlyDeposit: get().monthlyDeposit,
                interestRate: get().interestRate,
            }),
        })
        const data = await response.json()
        const parsedData = payloadSchema.parse(data)
        console.log(parsedData)
        get().setGraphData({ amounts: parsedData.amounts, years: parsedData.years })
        // TODO: Handle the response data
    },
    setGraphData: (graphData: { amounts: string[]; years: string[] }) => {
        set((state) => ({ ...state, graphData }))
    },
}))

export default useSavingsStore
