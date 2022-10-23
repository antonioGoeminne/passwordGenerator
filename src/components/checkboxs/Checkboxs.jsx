import { Box, Checkbox } from '@chakra-ui/react'

export const Checkboxs = ({ handleChange }) => {

    const OPTIONS = [
        { text: 'Include Uppercase Letters', check: 'includeCapitals' },
        { text: 'Include Numbers', check: 'includeNumbers' },
        { text: 'Include Symbols', check: 'includeSymbols' }
    ]

    return (
        <Box mt={2} display='flex' flexDirection='column'>
            {OPTIONS.map(({ text, check }, index) =>
                <Checkbox
                    name={text}
                    onChange={(e) => handleChange(e, check)}
                    key={index}
                    colorScheme='yellow'
                    mb={2}
                    mt={1}
                >{text}
                </Checkbox>
            )}
        </Box>
    )
}