import { Box, Checkbox } from '@chakra-ui/react'

export const Checkboxs = () => {

    const OPTIONS = [
        { text: 'Include Uppercase Letters' },
        { text: 'Include Lowecase Letters' },
        { text: 'Include Numbers' },
        { text: 'Include Symbols' }
    ]

    return (
        <Box mt={2} display='flex' flexDirection='column'>
            {OPTIONS.map((opt) =>
                <Checkbox
                    colorScheme='yellow'
                    mb={2}
                    mt={1}
                    defaultChecked>{opt.text}
                </Checkbox>
            )}
        </Box>
    )
}