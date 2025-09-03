import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrolImage = ({
  scrollContainerRef,
  images = [],
  velocity = 50,
  className = "",
  damping = 50,
  stiffness = 400,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  function VelocityImage({ imageGroup, baseVelocity }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll(
      scrollContainerRef ? { container: scrollContainerRef } : {}
    );
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping.input,
      velocityMapping.output,
      { clamp: false }
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
      const range = max - min;
      return ((((v - min) % range) + range) % range) + min;
    }

    const x = useTransform(baseX, (v) =>
      copyWidth === 0 ? "0px" : `${wrap(-copyWidth, 0, v)}px`
    );

    const directionFactor = useRef(1);
    useAnimationFrame((_, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      directionFactor.current = velocityFactor.get() < 0 ? -1 : 1;
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        className={`${parallaxClassName} relative overflow-hidden`}
        style={parallaxStyle}
      >
        <motion.div
          className={`${scrollerClassName} flex whitespace-nowrap gap-5`}
          style={{ x, ...scrollerStyle }}
        >
          {imageGroup.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Scrolling"
              className={`flex-shrink-0 ${className} w-auto h-16 md:h-28`}
              ref={i === 0 ? copyRef : null}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  // **Pisahkan gambar menjadi dua baris**
  const row1 = images.filter((_, i) => i % 2 === 0); // Gambar genap (Baris pertama)
  const row2 = images.filter((_, i) => i % 2 !== 0); // Gambar ganjil (Baris kedua)
  return (
    <section className="space-y-4">
      <VelocityImage imageGroup={row1} baseVelocity={velocity} />
      <VelocityImage imageGroup={row2} baseVelocity={-velocity} />
    </section>
  );
};
