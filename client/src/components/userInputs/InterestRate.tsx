import {
    FormControl,
    FormLabel,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack,
} from '@chakra-ui/react'
import useSavingsStore from '../../store/useSavingsStore'

export const InterestRate = () => {
    const { interestRate, setInterestRate } = useSavingsStore()
    return (
        <FormControl>
            <FormLabel>Interest Rate: {interestRate} %</FormLabel>
            <Slider
                value={interestRate}
                onChange={(value) => setInterestRate(value)}
                width="100%"
                min={0}
                max={100}
                step={1}
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
    )
}
