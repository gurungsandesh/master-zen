import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { HomeWrapper } from "./homeStyle";
import Card from "../../components/card";

const HomePage = () => {
  const homePageContainer = useRef<any>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to("#signaturepath", {
        scrollTrigger: {
          trigger: "#signaturepath",
          toggleActions: "restart restart restart pause",
        },
        strokeDashoffset: 0,
        duration: 5,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return <HomeWrapper ref={homePageContainer}>home</HomeWrapper>;
};

export default HomePage;
