'use client'

import Buttons from "@/components/Buttons";
import Circles from "@/components/Circles";
import Speeds from "@/components/Speeds";
import { CircleColor, CircleState } from "@/types";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState<number>(0);


  const handleComplete = (colour: CircleColor) => {
    const amount = circleState[colour].amount;
    setNumber(prev => prev + amount);
  }

  const [circleState, setCircleState] = useState<CircleState>({
    red: { 
      colour: 'red',
      unlocked: true, 
      unlockedReq: 0, // prev upgrades required to unlock this circle
      auto: false, 
      autoReq: 2, // upgrades required to make this circle auto
      speed: 1, 
      speedMultipier: 0.75, // baseline multiplier for this colour: static
      costMultiplier: 1.5,
      upgradesUnlocked: 1, // increases when u press the red button
      amount: 10,
      complete: () => handleComplete('red') 
    },
    orange: {
      colour: 'orange', 
      unlocked: false, 
      unlockedReq: 10,
      auto: false, 
      speed: 100, 
      speedMultipier: 0.8,
      costMultiplier: 2,
      upgradesUnlocked: 1,
      amount: 1, 
      complete: () => handleComplete('orange') 
    },
    yellow: { 
      colour: 'yellow',
      unlocked: false, 
      auto: false, 
      speed: 100, 
      speedMultipier: 0.85,
      costMultiplier: 5,
      upgradesUnlocked: 1,
      amount: 1, 
      complete: () => handleComplete('yellow') 
    },
    green: { 
      colour: 'green',
      unlocked: false, 
      auto: false, 
      speed: 100, 
      speedMultipier: 0.87,
      costMultiplier: 7.5,
      upgradesUnlocked: 1,
      amount: 1, 
      complete: () => handleComplete('green') 
    },
    blue: { 
      colour: 'blue',
      unlocked: false, 
      auto: false, 
      speed: 100, 
      speedMultipier: 0.9,
      costMultiplier: 10,
      upgradesUnlocked: 1,
      amount: 1, 
      complete: () => handleComplete('blue') 
    },
    pink: { 
      colour: 'pink',
      unlocked: false, 
      auto: false, 
      speed: 100,
      speedMultipier: 0.95,
      costMultiplier: 20,
      upgradesUnlocked: 1, 
      amount: 1, 
      complete: () => handleComplete('pink') 
    },
    purple: { 
      colour: 'purple',
      unlocked: false, 
      auto: false, 
      speed: 100, 
      speedMultipier: 0.99,
      costMultiplier: 50,
      upgradesUnlocked: 1,
      amount: 1, 
      complete: () => handleComplete('purple') 
    }
  });

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

