import { useState, useEffect, useRef } from "react";

const CountUp = ({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;
    const totalFrames = Math.round(duration / 16);
    const increment = (end - start) / totalFrames;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      countRef.current = Math.floor(progress * (end - start) + start);
      setCount(countRef.current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(step);
    }, delay);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeoutId);
    };
  }, [start, end, duration, delay, isInView]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default CountUp;
