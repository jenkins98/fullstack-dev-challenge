import { z } from 'zod'
import { create } from 'zustand'

interface SavingsStore {
    initialSavings: number
    setInitialSavings: (initialSavings: number) => void
    monthlyDeposit: number
    setMonthlyDeposit: (monthlyDeposit: number) => void
    interestRate: number
    setInterestRate: (interestRate: number) => void

    // calculate: () => void;
}

const useSavingsStore = create<SavingsStore>((set) => ({
    initialSavings: 0,
    monthlyDeposit: 0,
    interestRate: 0,
    setInitialSavings: (initialSavings: number) => set((state) => ({ ...state, initialSavings })),
    setMonthlyDeposit: (monthlyDeposit: number) => set((state) => ({ ...state, monthlyDeposit })),
    setInterestRate: (interestRate: number) => set((state) => ({ ...state, interestRate })),
}))

export default useSavingsStore
