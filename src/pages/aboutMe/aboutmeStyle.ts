import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* justify-content: center; */

  .aboutMeDescription {
    .first {
      font-size: 2.5rem;
      text-shadow: 1px 0 0 #e4dccf, 0 1px 0 #e4dccf, -1px 0 0 #e4dccf,
        0 -1px 0 #e4dccf;
      color: #1c1b1b;

      .focused {
        -webkit-text-stroke: 1px #cab82b;
        -webkit-text-fill-color: #cab82b;
      }
    }
  }

  .animationPart {
    height: 46vh;
    width: 22vw;

    position: relative;

    .image {
      width: inherit;
      height: inherit;
      position: absolute;
    }

    .firstImage {
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .secondImage {
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .thirdImage {
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .story {
      position: absolute;
      top: 0%;
      left: -50%;
      z-index: -10;
      font-family: "Test Financier";
    }

    .teller {
      position: absolute;
      bottom: 0;
      right: -10%;
      z-index: 10;
      font-family: "Test Financier";
    }

    .struggler {
      position: absolute;
      top: -25%;
      left: -18%;
      z-index: -10;
      font-family: "Test Financier";
    }
    .hustler {
      position: absolute;
      top: 5%;
      left: 40%;
      z-index: 10;
      font-family: "Test Financier";
    }

    .loves {
      position: absolute;
      top: -18%;
      left: -18%;
      z-index: -10;
      font-family: "Test Financier";
    }
    .networking {
      position: absolute;
      bottom: 0%;
      left: 50%;
      z-index: 10;
      font-family: "Test Financier";
    }
  }
`;
