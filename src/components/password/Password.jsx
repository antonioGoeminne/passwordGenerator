import { Box, Text } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Password = ({ pass = 'Pasdqwdjn123' }) => {

    const passRef = useRef(null)
    const [animation, setAnimation] = useState(false)
    const customId = "custom-id-yes";
    const notify = () => toast('🔑 Password copied!', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        toastId: customId,
        style: { background: '#3A3A3A', color: '#FAF089' }
    });

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
                onClick={() => { copyClipboard(); setAnimation(!animation); notify() }}
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
                    fontSize='1.2rem' fontWeight='bold' ref={passRef}>{pass}</Text>
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
            <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}