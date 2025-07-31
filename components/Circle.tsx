"use client"

import { Circle as CircleType } from "@/types";
import { ReactNode, useEffect, useState } from "react";

interface CircleProps {
  size: number;
  circle: CircleType,
  children?: ReactNode;
}

const Circle = ({ size, circle, children }: CircleProps) => {
  const {colour, unlocked, speed, complete} = circle;
  const [spacePressed, setSpacePressed] = useState(false);

  useEffect(() => {
    if (circle.auto) {
      setSpacePressed(false);
      return;
    }

    const handleAnimationIteration = () => {
      if (complete) complete();
      setSpacePressed(false)
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space" && !spacePressed) {
        setSpacePressed(true);
      }
    };

    window.addEventListener("animationiteration", handleAnimationIteration);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("animationiteration", handleAnimationIteration);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [complete, spacePressed, circle]);

  return (
    <div 
      className={`rounded-full flex justify-center items-center overflow-hidden`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: unlocked ? '25px' : '0px',
        borderStyle: 'solid',
        borderColor: `var(--${colour})`,
        borderTopColor: `#ff0088`,
        boxSizing: 'border-box',
        position: 'relative',
        animation: circle.auto || spacePressed ? `rotate ${speed}s linear infinite` : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default Circle;
