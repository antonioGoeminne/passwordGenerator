// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const Button = {
    // The styles all button have in common
    baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 'base', // <-- border radius is same for all variants and sizes
    },
    // Two sizes: sm and md
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4, // <-- px is short for paddingLeft and paddingRight
            py: 3, // <-- py is short for paddingTop and paddingBottom
        },
        md: {
            fontSize: 'md',
            px: 6, // <-- these values are tokens from the design system
            py: 4, // <-- these values are tokens from the design system
        },
    },
    // Two variants: outline and solid
    variants: {
        outline: {
            border: '2px solid',
            width: '100%',
            margin: '5px 0',
            borderColor: 'secondary.800',
            color: 'secondary.800',
            _hover: { background: 'inherit' },
            _active: { background: 'secondary.800', color: 'black' }
        },
        solid: {
            bg: 'secondary.800',
            color: 'black',
            width: '100%',
            margin: '5px 0',
            _hover: { background: 'inherit' },
            _active: { background: 'inherit', color: '#fff' }
        },
    },
    // The default size and variant values
    defaultProps: {
        size: 'md',
        variant: 'outline',
    },
}

export default Button;