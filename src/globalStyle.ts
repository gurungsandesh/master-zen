import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
	    padding: 0;
	    border: 0;
	    font-size: 100%;
	    font: inherit;
	    vertical-align: baseline;
        font-family: 'Lexend', sans-serif;
    }
    body {
        background-color: #1c1b1b;
        color: #E4DCCF;
        font-size: 14px;
    }
`;

export default GlobalStyle;
