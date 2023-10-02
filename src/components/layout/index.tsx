import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { MenuList } from "../../constants/menuList";
import { getID } from "../../utils/getMenuId";
import { layoutProps } from "./layout";
import { LayoutWrapper } from "./layoutStyle";

const Layout = ({ children, width }: layoutProps) => {
  const containerRef = useRef<any>(null);

  useLayoutEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    let ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (children.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          end: () =>
            "+=" + document.getElementById("firstContainer")?.offsetWidth,

          scrub: 1,
          pin: true,
          snap: {
            snapTo: 1 / (children.length - 1),
            inertia: false,
            // duration: 0.1
            duration: { min: 0.2, max: 0.3 },
            ease: "Power3.easeInOut",
          },
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <LayoutWrapper width={width}>
      <div className="container" ref={containerRef} id="firstContainer">
        {children.map((page: any, index: number) => (
          <section
            key={`page${index}`}
            className={"panel"}
            id={getID(MenuList[index])}
          >
            {page}
          </section>
        ))}
      </div>
    </LayoutWrapper>
  );
};

export default Layout;
