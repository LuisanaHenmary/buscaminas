import { Link } from "react-router-dom"
import BoardGame from "./BoardGame"
import {  useSelector } from "react-redux"


const Game = () => {

    const state = useSelector(state => state)
    const {panel, board} = state

    return (
        <>
            <BoardGame board={board} panel={panel} />
            <Link to="/" >Home</Link>
        </>
    )
}

export default Game