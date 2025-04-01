import { Heading, VStack } from '@chakra-ui/react'

export const Header = () => {
    return (
        <VStack spacing={2} align="center">
            <Heading size="lg">Savings Calculator</Heading>
            <Heading size="md" color="grey5" fontWeight="normal">
                Calculate how your savings will grow over time
            </Heading>
        </VStack>
    )
}
