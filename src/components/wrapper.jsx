import { Box, Center, Button, Text } from '@chakra-ui/react'
import { SliderLength } from '../components/slider/SliderLength'
import { Strength } from '../components/strength/Strength'
import { Password } from '../components/password/Password'
import { Checkboxs } from './checkboxs/Checkboxs'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useState } from 'react'
import { AlertTemplate, notify } from './utils/AlertTemplate'

export const Wrapper = () => {

    const [password, setPassword] = useState('password')
    const [length, setLength] = useState(10)
    const [loading, setLoading] = useState(false)

    const [options, setOptions] = useState(
        {
            includeCapitals: false,
            includeNumbers: false,
            includeSymbols: false,
        }
    )

    const convertOptionsToBack = () => {
        const optionsToBack = Object.entries(options || {}).map(([id, value]) => `${id}=${value}`).join(',')
        return optionsToBack
    }

    const optionsToBack = convertOptionsToBack()


    const BASE_URL = `https://password-back-generator.onrender.com/api/password?length=${length}&checkOptions=${optionsToBack}`
    const TEST_URL = `http://localhost:8080/api/password?length=${length}&checkOptions=${optionsToBack}`

    const fetchPassword = () => {
        setLoading(true)
        axios({
            method: 'GET',
            url: BASE_URL,

        }).then((e) => { setPassword(e.data.password); setLoading(false); notify(false, '✅ Password generate!') })
            .catch((e) => setLoading(false))
    }

    const handleChangeCheckbox = (e, name) => {
        setOptions({ ...options, [name]: e.target.checked })
    }


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
            <Password pass={password} />
            <Box p={'.2rem 1rem'} background='primary.200'>
                <SliderLength setLength={setLength} length={length} />
                <Box>
                    <Checkboxs handleChange={handleChangeCheckbox} />
                </Box>
                <Strength length={length} options={options} />
                <Center><Button disabled={!length} variant='outline' onClick={() => fetchPassword()} isLoading={loading}>GENERATE</Button></Center>
                <AlertTemplate />
            </Box>
        </Box>
    )
}