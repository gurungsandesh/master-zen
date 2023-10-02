import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { AboutMeWrapper } from "./aboutmeStyle";
import Card from "../../components/card";

const AboutMe = () => {
  const aboutMeContainer = useRef<any>(null);
  const aboutMeTimeline = useRef<any>(null);

  return (
    <AboutMeWrapper ref={aboutMeContainer} className="aboutMeContainer">
      About me page
      <Card />
    </AboutMeWrapper>
  );
};

export default AboutMe;
