"use client"

import { Circle as CircleType, PrestigeState, SetNumber, SetPrestige } from "@/types";
import { useEffect, useState, useRef } from "react";

interface CircleProps {
  size: number;
  circle: CircleType;
  prestige: PrestigeState;
  setPrestige: SetPrestige;
  number: number;
  setNumber: SetNumber;
  style?: React.CSSProperties;
}

const Circle = ({ size, circle, prestige, setPrestige, number, setNumber, style }: CircleProps) => {
  const { colour, unlocked, speed } = circle;
  const [spacePressed, setSpacePressed] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!circle.unlocked) {
      setSpacePressed(false);
      return;
    }

    const handleNumber = () => {

      setNumber(prev => prev + ( 1 * circle.numberMultiplier * prestige.prestigeMultiplier ));

      if (prestige.prestigeReq <= ( number + 1) ) {
        setPrestige((prev: PrestigeState) => ({
          ...prev,
          prestigeAvailable: true,
        }))
      }
    }

    const handleAnimationIteration = (event: AnimationEvent) => {
      if (event.target === circleRef.current) {
        setSpacePressed(false);
        handleNumber()
      }


    };

    // HANDLE ANIMATION END TO FIND END STATE

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space" && !spacePressed) {
        setSpacePressed(true);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      event.preventDefault();
      if (!spacePressed) setSpacePressed(true);
    }

    addEventListener("animationiteration", handleAnimationIteration);
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      removeEventListener("animationiteration", handleAnimationIteration);
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [setNumber, spacePressed, circle, number, prestige.prestigeReq, prestige.prestigeMultiplier, setPrestige]);

  return (
    <div
      ref={circleRef}
      className={`${ unlocked ? 'border-[10px] sm:border-[15px] md:border-[20px] lg:border-[25px]' : 'border-0' } rounded-full flex justify-center items-center overflow-hidden`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderStyle: 'solid',
        borderColor: `var(--${colour})`,
        borderTopColor: '#ff0088',
        boxSizing: 'border-box',
        position: 'absolute',
        animation: circle.auto || spacePressed ? `rotate ${speed}s linear infinite` : 'none',
        ...style,
      }}
    />
  );
};

export default Circle;
