import { CircleColor, CircleState } from "@/types";
import Button from "./Button";

interface ButtonsProps {
  circleState: CircleState;
  setCircleState: (x: CircleState | ((prev: CircleState) => CircleState)) => void;
  number: number;
  setNumber: (updater: number | ((prev: number) => number)) => void;
}

const Buttons = ({ circleState, setCircleState, number, setNumber }: ButtonsProps) => {
  const COST_BASE = 5;

  const handlePurchase = (colour: CircleColor) => {
    const cost = COST_BASE * circleState[colour].upgradesUnlocked * circleState[colour].costMultiplier;

    // DO THE UPGRADE PURCHASE
    if (number >= cost) {
      setNumber(prev => prev - cost); // payment for the upgrade

      // CHECK FOR AUTO
      if (
          !circleState[colour].auto && // not already auto
          circleState[colour].upgradesUnlocked === circleState[colour].autoReq // hit the req for auto
        ) {
          setCircleState(
            (prev: CircleState) => (
              {
                ...prev,
                [colour]: {
                  ...prev[colour],
                  auto: true,
                  speed: 10, // MAGIC NUMBER, FIX LATER
                  upgradesUnlocked: prev[colour].upgradesUnlocked + 1,
                }
              }
            )
          )
        }

      else {
        setCircleState(
          (prev: CircleState) => (
            {
              ...prev,
              [colour]: {
                ...prev[colour],
                speed: prev[colour].speed * prev[colour].speedMultipier,
                upgradesUnlocked: prev[colour].upgradesUnlocked + 1,
              }
            }
          )
        )
      }

    }



  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      {
        Object.entries(circleState).map(([key, circle]) => (
          <Button 
            key={key} 
            circle={circle} 
            colour={key} 
            handlePurchase={() => handlePurchase(key as CircleColor)} 
            cost={COST_BASE * circleState[key as CircleColor].upgradesUnlocked * circleState[key as CircleColor].costMultiplier}
          />
        ))
      }
    </div>
  )
}

export default Buttons;