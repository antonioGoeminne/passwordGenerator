import { Box } from "@chakra-ui/react"
import CardContainer from "../components/cardPassword/CardContainer"
import { Wrapper } from "../components/wrapper"

export const Home = () => {

    return (
        <Box display={'flex'} alignItems='center'>
            <Wrapper />
            <CardContainer />
        </Box>
    )
}