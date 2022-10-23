import { Box, HStack, Text } from "@chakra-ui/react"

export const Strength = ({ length, options }) => {

    const conditions =
        [
            {
                minLength: 15,
                maxLength: 15,
                level: 6,
                options: options.includeCapitals && options.includeNumbers && options.includeSymbols,
                label: 'Hero!'
            },
            {
                minLength: 8,
                maxLength: 15,
                level: 4,
                options: options.includeNumbers && options.includeSymbols,
                label: 'Medium'
            }
        ]

    const strength = conditions.find(x =>( Number(length) >= Number(x.minLength) && Number(length) <= Number(x.maxLength)) && x.options);

    return (
        <Box background={'blackAlpha.300'} p={3} m={'.5rem 0'} display={'flex'} justifyContent='space-between'>
            <Text color='primary.100'>Strength</Text>
            <HStack>
                <Text color='#fff' fontWeight={'bold'} fontSize='1.2rem'>{strength?.label ?? 'Low'}</Text>
                <HStack spacing={1}>
                    {[...Array(strength?.level || 3)].map((x) => <Box key={x} height={4} w={'6px'} border='1px solid #fff' background='yellow'></Box>)}
                </HStack>
            </HStack>
        </Box>
    )
}