'use client'

import Buttons from "@/components/Buttons";
import Circles from "@/components/Circles";
import Number from "@/components/Number";
import PrestigeButton from "@/components/PrestigeButton";
import Speeds from "@/components/Speeds";
import { CircleState, PrestigeState } from "@/types";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState<number>(999999999999999);
  const [prestige, setPrestige] = useState<PrestigeState>({
    prestigeMultiplier: 1,
    prestigeReq: 100,
    prestigeAvailable: false
  });

  const [circleState, setCircleState] = useState<CircleState>({
    red: { 
      colour: 'red',
      unlocked: true, 
      unlockOnAuto: 'orange', // what u unlock, not who unlocks u
      auto: false, // is it spinning?
      autoReq: 5, // upgrades required to make this circle spin
      speed: 1, // base speed for manual, switches to 10 on auto
      speedMultipier: 0.75, // how much faster the speed gets on upgrade: remember 0 is fastest
      costMultiplier: 1.1, // how much more expensive upgrades get
      upgradesUnlocked: 0, // increases when u press the red button, how many upgrades u have bought
      numberMultiplier: 1, // how many numbers this circle gets on rotation
      baseCost: 5,
    },
    orange: {
      colour: 'orange', 
      unlocked: false, 
      unlockOnAuto: 'yellow',
      auto: false, 
      autoReq: 5,
      speed: 2, 
      speedMultipier: 0.8,
      costMultiplier: 1.15,
      upgradesUnlocked: 0,
      numberMultiplier: 5, 
      baseCost: 10,
    },
    yellow: { 
      colour: 'yellow',
      unlocked: false, 
      unlockOnAuto: 'green',
      auto: false, 
      autoReq: 5,
      speed: 3, 
      speedMultipier: 0.85,
      costMultiplier: 1.2,
      upgradesUnlocked: 0,
      numberMultiplier: 25,
      baseCost: 50,
    },
    green: { 
      colour: 'green',
      unlocked: false, 
      unlockOnAuto: 'blue',
      auto: false, 
      autoReq: 10,
      speed: 4, 
      speedMultipier: 0.87,
      costMultiplier: 1.225,
      upgradesUnlocked: 0,
      numberMultiplier: 75,
      baseCost: 150,
    },
    blue: { 
      colour: 'blue',
      unlocked: false, 
      unlockOnAuto: 'pink',
      auto: false, 
      autoReq: 15,
      speed: 5, 
      speedMultipier: 0.9,
      costMultiplier: 1.25,
      upgradesUnlocked: 0,
      numberMultiplier: 750,
      baseCost: 1500,
    },
    pink: { 
      colour: 'pink',
      unlocked: false, 
      unlockOnAuto: 'purple',
      auto: false, 
      autoReq: 15,
      speed: 6, 
      speedMultipier: 0.925,
      costMultiplier: 1.275,
      upgradesUnlocked: 0, 
      numberMultiplier: 50000, 
      baseCost: 100000,
    },
    purple: { 
      colour: 'purple',
      unlocked: false, 
      unlockOnAuto: null,
      auto: false, 
      autoReq: 20,
      speed: 7, 
      speedMultipier: 0.95,
      costMultiplier: 1.3,
      upgradesUnlocked: 0,
      numberMultiplier: 500000,
      baseCost: 1500000,
    }
  });

  return (
    <div className="p-5 bg-black text-white w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col gap-5 justify-center items-center">
        <Speeds circleState={circleState} />
        <Number number={number} />
        <PrestigeButton prestige={prestige} setPrestige={setPrestige} circleState={circleState} setCircleState={setCircleState} />
      </div>
      <Circles circleState={circleState} prestige={prestige} setPrestige={setPrestige} number={number} setNumber={setNumber}  />
      <div className="max-h-[33vh]">
        <Buttons circleState={circleState} setCircleState={setCircleState} number={number} setNumber={setNumber} />
      </div>
 </div>
  );
}
