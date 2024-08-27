// hooks/usePathAnimation.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const usePathAnimation = (pathRefs) => {
  useEffect(() => {
    if (!pathRefs || pathRefs.length === 0) return;

    pathRefs.forEach((pathRef) => {
      const pathLength = pathRef.current.getTotalLength();

      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: pathRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
        },
      });
    });
  }, [pathRefs]);
};

export default usePathAnimation;
