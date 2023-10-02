import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  perspective: 25px;

  .inner {
    width: 25rem;
    height: 15em;
    background-color: lightslategrey;
    transition: transform 0.2s;
  }
`;

interface cursorPositionProps {
  _x: number;
  _y: number;
  x: number;
  y: number;
}

const Card = () => {
  const cardref = useRef<any>(null);
  const innerref = useRef<any>(null);
  let counter = 0;
  let updateRate = 10;

  const [cursorPosition, setCursorPosition] = useState<cursorPositionProps>({
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
  });

  const updateTime = () => {
    return counter++ % updateRate === 0;
  };

  const handleMouseEnter = (event: any) => {
    setCursorPosition((prevValue) => ({
      ...prevValue,
      x: event.clientX - prevValue._x,
      y: (event.clientY - prevValue._y) * -1,
    }));
  };

  const handleMouseMove = (event: any) => {
    if (updateTime()) {
      setCursorPosition((prevValue) => ({
        ...prevValue,
        x: event.clientX - prevValue._x,
        y: (event.clientY - prevValue._y) * -1,
      }));
    }
  };

  const updateTransformStyle = (x: string, y: string) => {
    let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    innerref.current.style.transform = style;
  };

  const setOrigin = () => {
    setCursorPosition((prevValue) => ({
      ...prevValue,
      _x:
        cardref.current.offsetLeft +
        Math.floor(cardref.current.offsetWidth / 2),
      _y:
        cardref.current.offsetTop +
        Math.floor(cardref.current.offsetHeight / 2),
    }));
  };

  const handleMouseLeave = (event: any) => {
    innerref.current.style = "";
  };

  useEffect(() => {
    setOrigin();
  }, []);

  useEffect(() => {
    updateTransformStyle(
      (cursorPosition.y / innerref.current.offsetHeight / 2).toFixed(2),
      (cursorPosition.x / innerref.current.offsetWidth / 2).toFixed(2)
    );
    return () => {};
  }, [cursorPosition]);

  return (
    <CardContainer
      ref={cardref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="inner" ref={innerref}>
        tilting card
      </div>
    </CardContainer>
  );
};

export default Card;
