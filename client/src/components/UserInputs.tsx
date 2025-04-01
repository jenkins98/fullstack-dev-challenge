import React, { useEffect } from 'react'
import {
    VStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Box,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react'
import useSavingsStore from '../store/useSavingsStore'

export const UserInputs = () => {
    const {
        interestRate,
        setInterestRate,
        initialSavings,
        setInitialSavings,
        monthlyDeposit,
        setMonthlyDeposit,
    } = useSavingsStore()

    useEffect(() => {
        console.log(initialSavings)
    }, [initialSavings])

    const handleInitialSavingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.valueAsNumber
        if (!isNaN(value)) setInitialSavings(e.target.valueAsNumber)
    }

    return (
        <VStack spacing={10} margin={20} align="stretch">
            {/* Initial Savings Input */}
            <FormControl>
                <FormLabel>Initial Savings Amount</FormLabel>
                <InputGroup>
                    <InputLeftElement>
                        <Text color="grey5">£</Text>
                    </InputLeftElement>
                    <Input
                        type="number"
                        placeholder="Enter amount"
                        onChange={handleInitialSavingsChange}
                    />
                </InputGroup>
            </FormControl>

            {/* Monthly Deposit Input */}
            <FormControl>
                <FormLabel>Monthly Deposit</FormLabel>
                <InputGroup>
                    <InputLeftElement>
                        <Text>£</Text>
                    </InputLeftElement>
                    <Input type="number" placeholder="Enter your monthly deposit amount" />
                </InputGroup>
            </FormControl>

            {/* Interest Rate Input */}
            <FormControl>
                <FormLabel>Interest Rate: {interestRate} %</FormLabel>
                <Slider
                    value={interestRate}
                    onChange={(value) => setInterestRate(value)}
                    width="100%"
                    min={0}
                    max={100}
                    step={0.1}
                    colorScheme="green"
                >
                    <SliderMark value={0} mt={2}>
                        0%
                    </SliderMark>
                    <SliderMark value={100} mt={2}>
                        100%
                    </SliderMark>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </FormControl>
        </VStack>
    )
}
