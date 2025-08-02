"use client"

import { Circle as CircleType, PrestigeState } from "@/types";
import { useEffect, useState, useRef } from "react";

interface CircleProps {
  size: number;
  circle: CircleType;
  prestige: PrestigeState;
  setPrestige: (updater: PrestigeState | ((prev: PrestigeState) => PrestigeState)) => void;
  number: number;
  setNumber: (updater: number | ((prev: number) => number)) => void;
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

    addEventListener("animationiteration", handleAnimationIteration);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      removeEventListener("animationiteration", handleAnimationIteration);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [setNumber, spacePressed, circle]);

  return (
    <div
      ref={circleRef}
      className={`rounded-full flex justify-center items-center overflow-hidden`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: unlocked ? '25px' : '0px',
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
