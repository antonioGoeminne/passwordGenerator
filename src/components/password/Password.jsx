import { Box, Text } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import 'react-toastify/dist/ReactToastify.css';
import { AlertTemplate, notify } from '../utils/AlertTemplate';

export const Password = ({ pass }) => {

    const passRef = useRef(null)
    const [animation, setAnimation] = useState(false)

    const copyClipboard = () => {
        navigator.clipboard.writeText(pass)
    }

    return (
        <>
            <Box
                as={motion.div}
                initial={false}
                animate={animation ? "open" : "closed"}
                cursor={'pointer'}
                onClick={() => { copyClipboard(); setAnimation(!animation); notify(false, '🔑 Password copied!') }}
                mb={3}
                backgroundColor='primary.200'
                p={'.2rem 1rem'}
                display='flex'
                alignItems='center'
                justifyContent='space-between'
            >
                <Text
                    as={motion.p}
                    sx={{ display: 'inline' }}
                    variants={{
                        open: {
                            scale: [null, 1.1, 1],
                            transition: { duration: 0.3 }
                        },
                        closed: {
                            scale: [null, 1.1, 1],
                            transition: { duration: 0.3 }
                        },
                    }}
                    fontSize='1.2rem' fontWeight='bold' ref={passRef}>{!pass ? 'Cargando...' : pass}</Text>
                <Box
                    as={motion.div}
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 }
                    }}
                    p={1}
                    w={8}
                    display='inline-flex'
                    alignItems={'center'}
                    justifyContent='center'
                    borderRadius={999}
                    _hover={{ background: 'rgb(0 0 0 / 10%)' }}
                >
                    <CopyIcon
                        color='secondary.800' />
                </Box>
            </Box >
            <AlertTemplate />
        </>
    )
}