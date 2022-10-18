import { Box } from "@chakra-ui/react"
import { CardPassword } from "./CardPassword"

const CardContainer = () => {

    return (

        <Box display={'flex'} flexDirection='column' gap={3} mt={2} height={312} alignItems='center'>
            {[...Array(5)].map(card => <CardPassword key={card} />)}
        </Box>
    )
}

export default CardContainer;