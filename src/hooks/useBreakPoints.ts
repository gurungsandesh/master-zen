import { useEffect, useState } from "react";

export function useBreakPoints() {
  const [breakPoints, setBreakPoints] = useState<number>(window.innerHeight);

  const calculateBreakPoints = () => {
    setBreakPoints(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", calculateBreakPoints);
    return () => window.removeEventListener("resize", calculateBreakPoints);
  }, []);

  return breakPoints;
}
