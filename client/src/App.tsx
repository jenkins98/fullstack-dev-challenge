import React, { useEffect } from 'react'
import './App.css'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import DefaultLayout from './components/layouts/Default'
import LineChart from './components/LineChart'
import theme from './theme'
import { UserInputs } from './components/UserInputs'
import { Header } from './components/Header'
import useSavingsStore from './store/useSavingsStore'

const defaultTheme = extendTheme(theme)

function App() {
    const { graphData, initialSavings, monthlyDeposit, interestRate, calculateInterest } =
        useSavingsStore()

    useEffect(() => {
        calculateInterest()
    }, [initialSavings, monthlyDeposit, interestRate])

    return (
        <ChakraProvider theme={defaultTheme}>
            {/* We've just bundled everything into one file here to 
            get you started!*/}
            <DefaultLayout>
                <Container pt={6}>
                    <Header />
                    <UserInputs />
                    <LineChart
                        title="Savings Over time"
                        xAxisData={graphData.years}
                        yAxisData={graphData.amounts}
                        xLabel="Years"
                        yLabel="Amount"
                    />
                </Container>
            </DefaultLayout>
        </ChakraProvider>
    )
}

export default App
