import styled from "styled-components"

const Panel = styled.div`
    padding:5px;
    margin-top:5px;
    display: flex;
    align-items: center;

    & button{
        font-size:20px;
        background-color:white;
        margin:10px;
        cursor:pointer;
        border: 1px solid black;
        padding: 5px;
    }
`

const PanelControl = ({ markEvent, revealEvent, panelState }) => {
    return (
        <Panel>
            <button
                onClick={() => markEvent()}
                disabled={panelState.markButtonDisabled}

            >
                Check
            </button>
            <button
                onClick={() => revealEvent()}
                disabled={panelState.revealButtonDisabled}
            >
                Reveal
            </button>
        </Panel>
    )

}

export default PanelControl