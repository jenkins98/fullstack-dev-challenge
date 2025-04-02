import { FormControl, FormLabel, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import useSavingsStore from '../../store/useSavingsStore'

export const Deposit = () => {
    const { setMonthlyDeposit } = useSavingsStore()

    const handleMonthlyDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setMonthlyDeposit(0)
            return
        }
        const value = e.target.valueAsNumber
        if (!isNaN(value)) setMonthlyDeposit(value)
    }

    return (
        <FormControl>
            <FormLabel>Monthly Deposit</FormLabel>
            <InputGroup>
                <InputLeftElement>
                    <Text color="grey">£</Text>
                </InputLeftElement>
                <Input
                    type="number"
                    placeholder="Enter your monthly deposit amount"
                    onChange={handleMonthlyDepositChange}
                />
            </InputGroup>
        </FormControl>
    )
}
