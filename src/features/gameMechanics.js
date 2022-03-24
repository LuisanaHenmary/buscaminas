export const checkingUncheckingCell = (panel, board) => dispatch => {
    const {selectedRow, selectedColum} = getIndexs(panel.panelTarget)

    const {marked} = board[selectedRow][selectedColum]

    const newBoard = board.map((row, index_row) =>
        row.map((element, index_element) =>
            index_row === selectedRow && index_element === selectedColum ? ({
                ...element,
                view: !marked?"🚩":"#",
                marked: !marked,
            }) : element
        ))

    dispatch({ type: 'updateBoard', payload: newBoard, })

    dispatch(disabledPanel(panel))
}

export const revealCell = (panel, board) => dispatch => {
    const {selectedRow, selectedColum} = getIndexs(panel.panelTarget)

    const newBoard = board.map((row, index_row) =>
        row.map((element, index_element) =>
            index_row === selectedRow && index_element === selectedColum ? ({
                ...element,
                view: element.value,
                used: true,
            }) : element
        ))

    dispatch({ type: 'updateBoard', payload: newBoard, })

    dispatch(disabledPanel(panel))
}

export const getIndexs = (target) => {
    const indexs = target.split(" ")

    return {
        selectedRow: Number(indexs[0]),
        selectedColum: Number(indexs[1])
    }

}

const disabledPanel = (panel) => dispatch => {
    if (!panel.markButtonDisabled && !panel.revealButtonDisabled) {
        dispatch({ type: 'disabled' })
    }

    if (!panel.markButtonDisabled && panel.revealButtonDisabled) {
        dispatch({ type: 'disabledOnlyMark' })
    }
}