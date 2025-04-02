import React, { useEffect } from 'react'
import { VStack } from '@chakra-ui/react'
import useSavingsStore from '../store/useSavingsStore'
import { InitialSavings } from './userInputs/InitialSavings'
import { Deposit } from './userInputs/Deposit'
import { InterestRate } from './userInputs/InterestRate'

export const UserInputs = () => {
    const { interestRate, initialSavings, monthlyDeposit } = useSavingsStore()

    useEffect(() => {
        console.log(initialSavings, monthlyDeposit, interestRate)
    }, [initialSavings, monthlyDeposit, interestRate])

    return (
        <VStack spacing={10} margin={20} align="stretch">
            <InitialSavings />
            <Deposit />
            <InterestRate />
        </VStack>
    )
}
