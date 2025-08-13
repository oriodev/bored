'use client'

import { useEffect, useState } from "react";

import { CircleState, GameState, PrestigeState } from "@/types";

import Buttons from "@/components/gameplay/UpgradeButtons";
import Circles from "@/components/gameplay/Circles";
import Number from "@/components/gameplay/Number";
import PrestigeButton from "@/components/gameplay/PrestigeButton";
import Tutorial from "@/components/Tutorial";
import TopBar from "@/components/TopBar";

import { CIRCLE_STATE_DEFAULT_DATA, NUMBER_DEFAULT_DATA, PRESTIGE_DEFAULT_DATA, TUTORIAL_DEFAULT_DATA } from "./data/gamestate.data";

export default function Home() {

  // SET ALL OF THE DEFAULT STATES.
  const [tutorialVisible, setTutorialVisible] = useState(TUTORIAL_DEFAULT_DATA)
  const [number, setNumber] = useState<number>(NUMBER_DEFAULT_DATA);
  const [prestige, setPrestige] = useState<PrestigeState>(PRESTIGE_DEFAULT_DATA);
  const [circleState, setCircleState] = useState<CircleState>(CIRCLE_STATE_DEFAULT_DATA);

  // FETCH STATE FROM LOCAL STORAGE AND OVERRIDE DEFAULTS.
  useEffect(() => {
    const loadGame = (): GameState | null => {
      const savedState = localStorage.getItem('gameState');
      return savedState ? JSON.parse(savedState) : null;
    }

    const loadedGame = loadGame();

    if (loadedGame) {
      setNumber(loadedGame.number)
      setPrestige(loadedGame.prestige)
      setCircleState(loadedGame.circleState)
      setTutorialVisible(loadedGame.tutorialVisible)
    }
  }, [])

  // SAVE THE GAME ON CLOSE
  useEffect(() => {
    const handleBeforeUnload = () => {
      const gameToSave: GameState = {
        number,
        prestige,
        circleState,
        tutorialVisible
      }
      localStorage.setItem('gameState', JSON.stringify(gameToSave));
    }

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, [number, prestige, circleState]);


  return (
    <div className="p-5 bg-black text-white w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full flex flex-col gap-5 justify-center items-center">

        <TopBar 
          circleState={circleState}
          tutorialVisible={tutorialVisible} 
          setTutorialVisible={setTutorialVisible}
          setNumber={setNumber} 
          setCircleState={setCircleState}
          setPrestige={setPrestige}
        />

        <Number number={number} />

        <PrestigeButton
          prestige={prestige}
          setPrestige={setPrestige}
          setCircleState={setCircleState} 
          setNumber={setNumber}
        />
      </div>

      <Circles
        circleState={circleState}
        prestige={prestige}
        setPrestige={setPrestige}
        number={number}
        setNumber={setNumber}  
      />
      
      <div className="max-h-[33vh]">
        <Buttons 
          circleState={circleState} 
          setCircleState={setCircleState} 
          number={number} 
          setNumber={setNumber} 
        />
      </div>
      <Tutorial visible={tutorialVisible} setTutorialVisible={setTutorialVisible} />
 </div>
  );
}
