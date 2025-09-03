import React from "react";
import { motion } from "framer-motion";

export const TextWrite = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block px-1">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={` text-slate-700 md:text-4xl text-sm sm:text-xl`}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className={`flex space-x-1 my-6 ${className}`}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div className="text-xl font-bold" style={{ whiteSpace: "nowrap" }}>
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={`block rounded-sm w-[4px] h-6 bg-blue-500 ${cursorClassName}`}
      ></motion.span>
    </div>
  );
};
