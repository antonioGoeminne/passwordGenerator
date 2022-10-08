import { Box, HStack, Text } from "@chakra-ui/react"

export const Strength = () => {
    return (
        <Box background={'blackAlpha.300'} p={3} m={'.5rem 0'} display={'flex'} justifyContent='space-between'>
            <Text color='primary.100'>Strength</Text>
            <HStack>
                <Text color='#fff'>MEDIUM</Text>
                <HStack spacing={1}>
                    {[...Array(4)].map((x) => <Box height={4} w={'6px'} border='1px solid #fff' background='yellow'></Box>)}
                </HStack>
            </HStack>
        </Box>
    )
}