import styled from "styled-components"

const Cell = styled.button`
    background-color:white;
    color: ${props=>  props.isUsed?'white':'black'};
    border: 1px solid black;
    width:40px;
    height:40px;
    text-align: center;
    margin:1px;
    font-size:20px;
    cursor:pointer;
`

export default Cell