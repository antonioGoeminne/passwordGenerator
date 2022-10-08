import { Box, Center, Button, Text } from '@chakra-ui/react'
import { SliderLength } from '../components/slider/SliderLength'
import { Strength } from '../components/strength/Strength'
import { Password } from '../components/password/Password'
import { Checkboxs } from './checkboxs/Checkboxs'
import { motion } from 'framer-motion'

export const Wrapper = () => {

    return (
        <Box
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            as={motion.div}
            p={'.2rem 1rem'}
            w={350}>
            <Text color='primary.100' textAlign='center' m={2}>Password generator</Text>
            <Password />
            <Box p={'.2rem 1rem'} background='primary.200'>
                <SliderLength />
                <Box>
                    <Checkboxs />
                </Box>
                <Strength />
                <Center><Button variant='outline'>GENERATE</Button></Center>
            </Box>
        </Box>
    )
}