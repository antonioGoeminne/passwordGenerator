import { Box, Text } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export const Password = ({ pass = 'Pasdqwdjn123' }) => {

    const passRef = useRef(null)
    const [animation, setAnimation] = useState(false)


    const copyClipboard = () => {
        navigator.clipboard.writeText(pass)
    }

    return (
        <Box
            as={motion.div}
            animate={animation ? "copy" : "closed"}
            cursor={'pointer'}
            onClick={() => { copyClipboard(); setAnimation(true) }}
            mb={3}
            backgroundColor='primary.200'
            p={'.2rem 1rem'}
            display='flex'
            alignItems='center'
            justifyContent='space-between'
        >
            <Text fontSize='1.2rem' fontWeight='bold' ref={passRef}>{pass}</Text>
            <Box
                variants={{
                    copy: { rotate: 180 },
                }}
                p={1}
                w={8}
                display='flex'
                alignItems={'center'}
                justifyContent='center'
                borderRadius={999}
                _hover={{ background: 'rgb(0 0 0 / 10%)' }}
            >
                <CopyIcon
                    color='secondary.800' />
            </Box>
        </Box >
    )
}