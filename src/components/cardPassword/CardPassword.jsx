import { Box, HStack, Text } from '@chakra-ui/react'

export const CardPassword = () => {

    return (

        <Box p={2} w={280} border='2px solid yellow' borderRadius={5}>
            <Box>
                <Text fontWeight={'bold'}>Label</Text>
                <HStack justifyContent={'space-between'}>
                    <Text >medium</Text>
                    <Text>2022/12/12</Text>
                </HStack>
            </Box>
        </Box>
    )
}