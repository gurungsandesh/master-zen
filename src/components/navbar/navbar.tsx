import {
  AiOutlineCodepen,
  AiOutlineHome,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";

const NavBar = styled.div`
  margin-right: 1rem;
  font-size: 1.5rem;

  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;

  & > ul {
    list-style-type: none;
    height: 80%;

    & > li {
      padding: 0.5rem 0rem;
      margin-bottom: 1rem;
      writing-mode: vertical-rl;
    }
  }
`;

const Navbar = () => {
  return (
    <NavBar>
      <ul>
        <li>
          <AiOutlineHome></AiOutlineHome>
        </li>
        <li>Works</li>
      </ul>

      <ul>
        <li>
          <AiOutlineCodepen />
        </li>
        <li>
          <FaLinkedinIn></FaLinkedinIn>
        </li>
        <li>
          <AiOutlineTwitter></AiOutlineTwitter>
        </li>
      </ul>
    </NavBar>
  );
};

export default Navbar;
