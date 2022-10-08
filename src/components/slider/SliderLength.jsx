import {
    Text,
    HStack,
    Box,
    Center,
    Slider,
    SliderFilledTrack,
    SliderTrack,
    SliderThumb
} from '@chakra-ui/react'
import { useState } from 'react'

export const SliderLength = () => {

    const [sliderValue, setSliderValue] = useState(4)


    return (
        <Box display='flex' flexDir='column'>
            <HStack p='.5rem 0' justifyContent='space-between'>
                <Text fontSize='.9rem'>Character length</Text>
                <Text
                    fontSize='1.2rem' fontWeight='bold' color='secondary.800'>{sliderValue}</Text>
            </HStack>
            <Center>
                <Slider aria-label='slider-ex-2' min={0} max={10} step={2} onChange={(value) => setSliderValue(value)} value={sliderValue} defaultValue={30}>
                    <SliderTrack bg='secondary.300'>
                        <SliderFilledTrack bg='secondary.800' />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Center>
        </Box>
    )

}