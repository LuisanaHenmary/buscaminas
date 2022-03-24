import { Link } from "react-router-dom"
import styled from "styled-components"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;;
    align-items: center;
`

const Menu = () =>{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'resetPanel' })
        dispatch({type: 'resetBoard'})
    }, [dispatch])
    
    return(
        <Card>
            <Link to="/game">Play</Link>
            <Link to="/credits">Credits</Link>
        </Card>
    )
}

export default Menu