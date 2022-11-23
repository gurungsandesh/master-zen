import { useEffect } from 'react';
import styled from 'styled-components';

import { AiOutlineCodepen, AiOutlineHome, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomePageWrapper = styled.div`
    padding: 1rem;
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 5fr 1fr ;
    gap: 1rem;

    
    .addBorder {
    padding: 0.2rem;
    border: 1px solid white;
    }
    
    `

const HeadNavbar = styled.div`
  font-size: 1.5em;
  color: #7f8fa6;

  border-bottom: 5px solid whitesmoke;

  & > div {
    font-size: 0.8rem;
  }
`;

const NavBar = styled.div`
    grid-column: 3/4;
    grid-row: 1/ 3 ;
    justify-self: end;
    cursor: pointer;
    padding-right: 1rem;

    /* background-color: red; */

    & > ul {
        list-style-type: none;

        & >li {
            /* border: 2px solid white; */
            /* padding: 0.2rem 0rem; */
            padding: 0.5rem 0rem;
            margin-bottom: 1rem;
            writing-mode: vertical-rl;            
        }
    }
    
`


const Discription = styled.div`
    grid-area: 2/2/3/3;
    
    background-color: grey;
    `

const SocialMediaList = styled.div`
    grid-column: 3/4;
    justify-self: end;
    cursor: pointer;

    & > ul {
        list-style-type: none ;

        & > li  {
            margin-bottom: 1rem;
        }
    }

`

function HomePage() {


    useEffect(() => {

    });

    return (
        <HomePageWrapper className='homepage'>
            <div></div>
            <HeadNavbar>
                {/* Hello! This is Sandesh gurung. */}
                {/* <div id='post'>Frontend Developer/Mern Stack /Networking enthusiast</div> */}
            </HeadNavbar>

            <NavBar>
                <ul>
                    <li >
                        <AiOutlineHome></AiOutlineHome>
                    </li>
                    <li>
                        About Me
                    </li>
                    <li>
                        Works
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </NavBar>

            <Discription>
                This is my discription
            </Discription>

            <SocialMediaList>
                <ul>
                    <li><Link to={"/home"}><AiOutlineCodepen /></Link></li>
                    <li><FaLinkedinIn></FaLinkedinIn></li>
                    <li><AiOutlineTwitter></AiOutlineTwitter></li>
                </ul>
            </SocialMediaList>

        </HomePageWrapper>
    )
}

export default HomePage