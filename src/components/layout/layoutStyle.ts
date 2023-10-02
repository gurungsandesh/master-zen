import styled from "styled-components";

export const LayoutWrapper = styled.div<{ width: string }>`
  overflow-x: hidden;
  position: relative;

  .container {
    display: flex;
    width: ${(props) => props.width};
    gap: 0.5em;

    section {
      width: 100vw;
      height: 100vh;
      font-size: 2rem;

      overflow: hidden;
    }

    .review {
      overflow: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .review::-webkit-scrollbar {
      display: none;
    }
  }
`;
