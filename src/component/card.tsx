import React from 'react'
import styled from 'styled-components'


interface propTypes {
    heading: string;
    techUsed: string[]
    description: string[]
    imageUrl: string

}

const CardContainer = styled.div`
    width: 40rem;
    height: 10rem;
    overflow: hidden;

    margin: auto;
    background-color: darkblue;

    background: url('./water.jpg');
    background-position: 80% 50%;
    background-size: cover;
    
    position: relative;

    &:hover div {
        left: -12rem;
    }


    `

const ClipText = styled.div`
    font-size: 1.5rem;
    font-weight: 900;
    width: 10rem;
    
    background: url('./water.jpg');
    background-position: 80% 50%;
    background-size: cover;
    
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    position: absolute;
    top: 10%;
    left: 3%;

    z-index: 100;

    transition: all 3s;
`

const DescriptionList = styled.ul`
    text-decoration: none;
    list-style: none;
    margin-top: 2rem;


    background-color: white;
    color: black;
    font-size: 0.8rem;
    line-height: 0.8rem;

    & > li {
        color: black;
        background-color: white;
    }
    
`

const DetailDescription = styled.div`
    /* display: none; */

    position: absolute;

`

const DescriptionContainer = styled.div`
    height: 8rem;
    width: 13rem;
    text-align: left;

    background-color: white;
    font-size: 5rem;
    padding: 0.2rem;

    position: absolute;
    top: 10%;
    left: 0;

    transition: all 3s;


    `


const WorkCard = (props: propTypes) => {
    return (
        <div style={{ marginTop: '5rem' }}>
            <CardContainer>

                <ClipText>
                    {props.heading}
                </ClipText>

                <DetailDescription>
                    <ul>
                        {props.description.map((val) => <li>{val}</li>)}
                    </ul>
                </DetailDescription>



                <DescriptionContainer>
                    <DescriptionList>
                        {props.techUsed.map((val) => <li>{val}</li>)}
                    </DescriptionList>
                </DescriptionContainer>
            </CardContainer>

        </div>
    )
}

export default WorkCard