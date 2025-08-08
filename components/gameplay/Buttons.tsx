import { CircleColor, CircleState } from "@/types";
import Button from "./Button";

interface ButtonsProps {
  circleState: CircleState;
  setCircleState: (x: CircleState | ((prev: CircleState) => CircleState)) => void;
  number: number;
  setNumber: (updater: number | ((prev: number) => number)) => void;
}

const Buttons = ({ circleState, setCircleState, number, setNumber}: ButtonsProps) => {

  const handlePurchase = (colour: CircleColor) => {
    const cost =
      Math.ceil(circleState[colour].baseCost *
            circleState[colour].costMultiplier **
              circleState[colour].upgradesUnlocked
            * 10 ) / 10 // format it to 1 d.p. but only if needed

    // DO THE UPGRADE PURCHASE
    if (number >= cost) {
      setNumber(prev => prev - cost); // payment for the upgrade

      // CHECK FOR AUTO && UNLOCK
      if (
          !circleState[colour].auto && // not already auto
          circleState[colour].upgradesUnlocked === circleState[colour].autoReq // hit the req for auto
        ) {

          const toUnlock = circleState[colour].unlockOnAuto;

          setCircleState(
            (prev: CircleState) => {
              const updatedState = {
                ...prev,
                [colour]: {
                  ...prev[colour],
                  auto: true,
                  speed: 10, // MAGIC NUMBER, FIX LATER
                  upgradesUnlocked: prev[colour].upgradesUnlocked + 1,
                }
              };

              if (toUnlock) {
                updatedState[toUnlock] = {
                  ...prev[toUnlock],
                  unlocked: true
                };
              }

              return updatedState;
            }
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
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5">
      {
        Object.entries(circleState).map(([key, circle]) => (
          <Button
            key={key}
            circle={circle}
            colour={key}
            handlePurchase={() => handlePurchase(key as CircleColor)}
            cost={
              Math.ceil(circleState[key as CircleColor].baseCost *
              (circleState[key as CircleColor].costMultiplier **
                circleState[key as CircleColor].upgradesUnlocked)
              * 10 ) / 10 // format it to 1 d.p. but only if needed
            }
          num={number}
        />
      ))}
    </div>
  );
}

export default Buttons;