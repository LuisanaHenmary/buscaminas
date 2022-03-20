import styled from "styled-components"
import { Link } from "react-router-dom"

const Footer = styled.footer`
    display: flex;
    padding: 2rem 0;
    justify-content: center;
    align-items: center;
    color: rgb(199, 199, 199);
    font-size: 20px;
`

const Credits = () => {
    return (
        <>
            <Footer>
                <p>Developer: Luisana Henmary Perez Cardenas.</p>
            </Footer>
            <Link to="/" >Home</Link>
        </>
    )
}

export default Credits