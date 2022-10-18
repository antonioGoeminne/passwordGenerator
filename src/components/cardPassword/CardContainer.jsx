import { Box } from "@chakra-ui/react"
import { CardPassword } from "./CardPassword"

const CardContainer = () => {
//TODO: make card maquetado
    return (

        <Box display={'flex'} flexDirection='column' gap={5}>
            {[...Array(5)].map(card => <CardPassword key={card} />)}
        </Box>
    )
}

export default CardContainer;