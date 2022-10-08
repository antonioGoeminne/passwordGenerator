import { extendTheme, theme } from '@chakra-ui/react'
import Button from './components'
export default extendTheme({
    styles: {
        global: {
            body: {
                display: 'grid',
                placeContent: 'center',
                height: '100vh',
                color: '#D3D3D3',
                background: "blackAlpha.900",
            },
        },
    },
    colors: {
        error: 'red.300',
        success: 'green.300',
        primary: {
            ...theme.black,
            200: '#292927',
            100: '#686868',
            _dark: 'red.400',
        },
        secondary: {
            ...theme.yellow,
            800: '#EFF440',
            300: '#E3E38A',
            _dark: 'red.700',
        },
    },
    components: {
        Button
    }
})
