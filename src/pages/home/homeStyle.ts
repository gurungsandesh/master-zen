import styled from "styled-components";

export const HomeWrapper = styled.div`
  /* display: none; */

  .images {
    position: absolute;
    bottom: -5%;
    left: 55%;

    img {
      height: 90vh;
      /* width: 600px; */
    }
  }
  .words {
    position: absolute;
    top: 30%;
    left: 16%;
    font-size: 3rem;
    letter-spacing: 0.1rem;
    line-height: 3rem;

    font-family: "Test Financier";
    text-transform: uppercase;
    text-shadow: 4px 4px 4px rgba(251, 176, 64, 0.2);

    span {
      margin: 0px 1rem;
    }
    .focus {
      font-family: "Test Financier";
      text-transform: uppercase;
      text-shadow: 4px 4px 4px rgba(251, 176, 64, 0.2);
      color: #cab82b;

      &:nth-child(1) {
        margin-right: 0.5rem;
      }
    }
    .no-margin {
      margin: 0px 1rem 0px 0px;
    }
    .small {
      text-transform: uppercase;
      font-size: 1.3rem;
      letter-spacing: 0.1rem;
      text-shadow: 4px 4px 4px rgba(251, 176, 64, 0.2);
    }
  }
  .cta {
    position: absolute;
    top: 67%;
    left: 16%;
  }
  .signature {
    position: absolute;
    left: 40%;
    top: 70%;

    transform: rotate(-20deg);
    svg {
      width: 20vw;
      height: 10vh;

      path {
        stroke-dasharray: 510;
        stroke-dashoffset: 510;
        fill: transparent;
        stroke: white;
        stroke-width: 1px;
      }
    }
  }
`;
