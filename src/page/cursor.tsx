import React from 'react'
import styled from 'styled-components'

interface propTypes {
    clientX: number
    clientY: number
}

const CursorWrapper = styled.div<propTypes>`
    border: 3px solid white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: transparent;

    transform: translate(-50%, -50%);

    position: absolute;
    top: ${props => props.clientY + "px"};
    left: ${props => props.clientX + "px"};
    transition: all 0.2s ease-out;
    `

const Dot = styled.div<propTypes>`
    background-color: white;
    border: 1px solid white;
    border-radius: 50%;
    width: 5px;
    height: 5px;

    position: absolute;
    top: ${props => props.clientY + "px"};
    left: ${props => props.clientX + "px"};
`

function Cursor(props: propTypes) {
    return (
        <>
            <CursorWrapper clientX={props.clientX} clientY={props.clientY}>
            </CursorWrapper>
            <Dot clientX={props.clientX} clientY={props.clientY}></Dot>
        </>
    )
}

export default Cursor