import React, { useState } from "react";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HoverCard = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <Link
            href={item?.link}
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-gray-200  block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <Icon className="w-6 h-6 text-sky-500" />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
export function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-50 border  dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export function CardTitle({ className, children }) {
  return (
    <h4 className={cn("text-gray-500 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
}

export function CardDescription({ className, children }) {
  return (
    <p
      className={cn(
        "mt-8 text-gray-500 tracking-wide leading-relaxed text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
}
