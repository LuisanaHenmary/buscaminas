import styled from 'styled-components'
import { Outlet } from "react-router-dom";

const Container = styled.section`
    padding: 0 2rem;
    background-color: #505358;

`
const Main = styled.main`
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Grid = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    padding:10px;
    max-width: 800px;

    @media (max-width: 600px) {
          width: 100%;
          flex-direction: column;
    }

`
const Title = styled.h1`
    margin: 0;
    padding:5px;
    font-size: 50px;
    width: 100%;
    color:rgb(199, 199, 199);
    text-align:center;
`

const Footer = styled.footer`
    display: flex;
    padding: 2rem 0;
    justify-content: center;
    align-items: center;
    color: rgb(199, 199, 199);
    font-size: 20px;
`

const AppLayout = () => {
    return (
            <Container>
                <Title>💣find mines💥</Title>
                <Main>
                    <Grid>
                        <Outlet />
                    </Grid>
                </Main>
                <Footer>Developer: Luisana Henmary Perez Cardenas.</Footer>
            </Container>
    )

}

export default AppLayout