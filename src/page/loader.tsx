import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const NumberWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;
`

const BackgroundAfterObject = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 1%;
    height: 100%;

    background-color: grey;
`

const CountWrapper = styled.div`
    background-color: transparent;
    z-index: 20;

`
let x = 0;

function Loader() {

    const navigate = useNavigate();

    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount < 100 ? prevCount + 1 : 0)
            x++
            if (x === 100) {
                clearInterval(interval)
                navigate("home")
            }
        }, 25);
        return () => clearInterval(interval);
    }, [navigate]);


    return (
        <NumberWrapper>
            <CountWrapper>{count}</CountWrapper>
            <BackgroundAfterObject style={{ width: count + "%" }}></BackgroundAfterObject>
        </NumberWrapper>
    )
}

export default Loader