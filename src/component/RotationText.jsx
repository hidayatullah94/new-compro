import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
const RotatingText = ({
  texts,
  transition = { type: "spring", damping: 25, stiffness: 300 },
  initial = { y: "100%", opacity: 0 },
  animate = { y: 0, opacity: 1 },
  exit = { y: "-120%", opacity: 0 },
  animatePresenceMode = "wait",
  animatePresenceInitial = false,
  rotationInterval = 2000,
  staggerDuration = 0,
  staggerFrom = "first",
  loop = true,
  auto = true,
  splitBy = "characters",
  onNext,
  mainClassName,
  splitLevelClassName,
  elementLevelClassName,
  ...rest
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const splitIntoCharacters = (text) => {
    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex];
    return currentText.split(" ").map((word, i, arr) => ({
      characters: splitIntoCharacters(word),
      needsSpace: i !== arr.length - 1,
    }));
  }, [texts, currentTextIndex]);

  const next = useCallback(() => {
    setCurrentTextIndex((prev) =>
      prev === texts.length - 1 ? (loop ? 0 : prev) : prev + 1
    );
    if (onNext) onNext(currentTextIndex);
  }, [texts.length, loop, onNext, currentTextIndex]);

  useEffect(() => {
    if (!auto) return;
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto]);
  return (
    <motion.span
      className={cn(
        "flex flex-wrap whitespace-pre-wrap relative",
        mainClassName
      )}
      {...rest}
    >
      <span className="sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence
        mode={animatePresenceMode}
        initial={animatePresenceInitial}
      >
        <motion.div key={currentTextIndex} layout aria-hidden="true">
          {elements.map((wordObj, wordIndex) => (
            <span
              key={wordIndex}
              className={cn("inline-flex", splitLevelClassName)}
            >
              {wordObj.characters.map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  transition={transition}
                  className={cn("inline-block", elementLevelClassName)}
                >
                  {char}
                </motion.span>
              ))}
              {wordObj.needsSpace && <span className="whitespace-pre"> </span>}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.span>
  );
};

export default RotatingText;
