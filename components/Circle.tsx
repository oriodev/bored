"use client"

import { ReactNode, useEffect, useState } from "react";

interface CircleProps {
  size: number;
  color: string;
  visible: boolean;
  speed: number; 
  onComplete?: () => void;
  children?: ReactNode;
}

const Circle = ({ size, color, visible, speed, onComplete, children }: CircleProps) => {
  const [spacePressed, setSpacePressed] = useState(false);

  useEffect(() => {
    const handleAnimationIteration = () => {
      if (onComplete) onComplete();
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
  }, [onComplete, spacePressed]);

  return (
    <div 
      className={`rounded-full flex justify-center items-center overflow-hidden`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: visible ? '25px' : '0px',
        borderStyle: 'solid',
        borderColor: `var(--${color})`,
        borderTopColor: `#ff0088`,
        boxSizing: 'border-box',
        position: 'relative',
        animation: spacePressed ? `rotate ${speed}s linear infinite` : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default Circle;
