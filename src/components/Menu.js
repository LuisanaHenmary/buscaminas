import { Link } from "react-router-dom"
import styled from "styled-components"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;;
    align-items: center;
`

const Menu = () =>{
    return(
        <Card>
            <Link to="/game">Play</Link>
            <Link to="/credits">Credits</Link>
        </Card>
    )
}

export default Menu