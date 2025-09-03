import React, { memo, useState } from "react";

const Card = memo(function Card({ card, index, hovered, setHovered }) {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={`
          rounded-lg relative bg-gray-200 overflow-hidden   h-52 md:h-72 md:w-full w-80  transition-all duration-300 ease-out  
          ${hovered !== null && hovered !== index ? "blur-sm scale-[0.98]" : ""}
        `}
    >
      <img
        src={card.src}
        alt={card.title}
        className={`object-cover absolute inset-0 m-auto  md:w-44 w-32 rounded-full ${
          hovered === index
            ? "scale-125 transition-all duration-700 ease-out"
            : ""
        }`}
      />
      <div
        className={`
            absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300
            ${hovered === index ? "opacity-100" : "opacity-0"}
          `}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  );
});
export const FocusCard = ({ cards }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto md:px-8 w-full justify-items-center ">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};
