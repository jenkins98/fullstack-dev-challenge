import { FormControl, FormLabel, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import useSavingsStore from '../../store/useSavingsStore'

export const InitialSavings = () => {
    const { setInitialSavings } = useSavingsStore()

    const handleInitialSavingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setInitialSavings(0)
            return
        }
        const value = e.target.valueAsNumber
        if (!isNaN(value)) setInitialSavings(value)
    }

    return (
        <FormControl>
            <FormLabel>Initial Savings Amount</FormLabel>
            <InputGroup>
                <InputLeftElement>
                    <Text color="grey">£</Text>
                </InputLeftElement>
                <Input
                    type="number"
                    placeholder="Enter amount"
                    onChange={handleInitialSavingsChange}
                />
            </InputGroup>
        </FormControl>
    )
}
