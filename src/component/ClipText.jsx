import React from "react";

export const ClipText = ({ texts, images }) => {
  const letters = texts.split("");
  return (
    <div className="lg:text-8xl  md:text-6xl sm:text-4xl text-3xl font-bold text-white uppercase flex space-x-2">
      {letters.map((letter, index) => (
        <span
          key={index}
          className="relative text-transparent font-bold shadow-xl border-2 border-slate-200 rounded 
         text-wrap w-full"
          style={{
            backgroundImage: `url(${images[index % images.length]})`,
            backgroundSize: "cover",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};
