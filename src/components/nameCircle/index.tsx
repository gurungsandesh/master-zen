import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { nameCirclePropsModel } from "./nameCircle";
import { NameCircleWrapper } from "./nameCircleStyle";

const NameCircle = ({ title }: nameCirclePropsModel) => {
  const circleRef = useRef<any>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".text", {
        ease: "Linear.easeNone",
        rotation: 360,
        transformOrigin: "50% 50%",
        scrollTrigger: {
          trigger: ".container",
          scrub: true,
        },
      });
    }, circleRef);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <NameCircleWrapper ref={circleRef}>
      <svg viewBox="0 0 200 200" width="200" height="200" className="svg">
        <path
          id="circle"
          d="
                            M 50, 100
                            a 25,25 0 1,1 50,0
                            a 25,25 0 1,1 -50,0
                        "
          fill="#1C1B1B"
          fillOpacity={"30%"}
        />
        <text dy="-3%" stroke="red" className="text">
          <textPath stroke="#CAB82B" href="#circle">
            Roshan Niraula
          </textPath>
        </text>
      </svg>
    </NameCircleWrapper>
  );
};

export default NameCircle;
