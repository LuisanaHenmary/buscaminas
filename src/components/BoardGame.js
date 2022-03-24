import styled from "styled-components"
import { useDispatch } from "react-redux"
import PanelControl from "./PanelControl"
import Cell from "./Cell"
import { revealCell, checkingUncheckingCell, getIndexs } from "../features/gameMechanics"

const Board = styled.div`
    background-color:white;
    margin:20px;
    padding:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BoardGame = ({ board, panel }) => {
    const dispatch = useDispatch()

    const selectCell = (e) => {
        const { selectedRow, selectedColum } = getIndexs(e.target.name)

        const {marked} = board[selectedRow][selectedColum]
        
        const action = !marked?{ type: 'enabled', payload: e.target.name, }:
        { type: 'enabledOnlyMark', payload: e.target.name, }
        
        dispatch(action)
    }

    return (
        <Board >
            <div  >
                {board.map((row, index_row) =>
                    <div key={index_row} >{row.map((element, index_element) =>
                        <Cell
                            key={index_element}
                            name={`${index_row} ${index_element}`}
                            onClick={selectCell}
                            isUsed={element.used}
                            disabled={element.used}
                        >
                            {element.view}
                        </Cell>
                    )}</div>
                )}
            </div>
            <PanelControl
                markEvent={() => dispatch(checkingUncheckingCell(panel, board))}
                revealEvent={() => dispatch(revealCell(panel, board))}
                panelState={panel}
            />
        </Board>
    )

}

/* */

export default BoardGame