import { useEffect, useState } from "react";

export interface scrollPositionModel {
  scrollX: number;
  scrollY: number;
  maximumScrollY: number;
  clientHeight: number;
}

export function useScrollPosition() {
  const [scrollPosition, setscrollPosition] = useState<scrollPositionModel>({
    scrollX: 0,
    scrollY: 0,
    maximumScrollY: 0,
    clientHeight: 0,
  });

  const handleScroll = () => {
    const positionY = window.pageYOffset;
    const positionX = window.pageXOffset;
    const maximumScrollY = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    setscrollPosition({
      scrollX: positionX,
      scrollY: positionY,
      maximumScrollY: maximumScrollY,
      clientHeight: clientHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}
