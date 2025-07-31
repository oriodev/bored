'use client'

import Buttons from "@/components/Buttons";
import Circles from "@/components/Circles";
import Speeds from "@/components/Speeds";
import { CircleState } from "@/types";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState<number>(0);


  const handleComplete = (color: string) => {
    setNumber(prev => prev + 1);
  }

  const [circleState, setCircleState] = useState<CircleState>({
    red: { visible: true, speed: 1, complete: () => handleComplete('red') },
    orange: { visible: false, speed: 100, complete: () => handleComplete('orange') },
    yellow: { visible: false, speed: 100, complete: () => handleComplete('yellow') },
    green: { visible: false, speed: 100, complete: () => handleComplete('green') },
    blue: { visible: false, speed: 100, complete: () => handleComplete('blue') },
    pink: { visible: false, speed: 100, complete: () => handleComplete('pink') },
    purple: { visible: false, speed: 100, complete: () => handleComplete('purple') }
  });

  // multiplier? speed multiplier and amount multiplier


  return (
    <div className="p-5 bg-black text-white w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col gap-5 justify-center items-center">
        <Speeds circleState={circleState} />
        <p className="text-4xl font-black">{number}</p>
      </div>
      <Circles circleState={circleState} />
      <Buttons circleState={circleState} setCircleState={setCircleState} number={number} setNumber={setNumber} />
 </div>
  );
}

