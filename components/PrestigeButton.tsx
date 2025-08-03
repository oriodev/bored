import { CircleState, PrestigeState } from "@/types";

interface PrestigeButtonProps {
  prestige: PrestigeState;
  setPrestige: (updater: PrestigeState | ((prev: PrestigeState) => PrestigeState)) => void;
  circleState: CircleState;
  setCircleState: (x: CircleState | ((prev: CircleState) => CircleState)) => void;
}

const PrestigeButton = ({ prestige, setPrestige, circleState, setCircleState }: PrestigeButtonProps) => {

  const speeds = {
    red: 1,
    orange: 2,
    yellow: 3,
    green: 4,
    blue: 5,
    pink: 6,
    purple: 7
  }

  const resetToDefault = (circle: keyof CircleState) => ({
    ...circleState[circle],
    unlocked: circle === 'red' ? true : false,
    auto: false,
    speed: speeds[circle],
    upgradesUnlocked: 0
  })

  const handlePrestige = () => {
    if (!prestige.prestigeAvailable) return;

    setPrestige((prev: PrestigeState) => ({
          prestigeMultiplier: prev.prestigeMultiplier * 2,
          prestigeReq: prev.prestigeReq * 10,
          prestigeAvailable: false,
    }))

    setCircleState(prevState => {
      const newState = { ...prevState };
      (Object.keys(newState) as Array<keyof CircleState>).forEach(circle => {
        newState[circle] = resetToDefault(circle);
      });

      return newState;
    })

  }

  return (
    <div
      className={`${prestige.prestigeAvailable ? 'opacity-100 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out' : 'opacity-0 hover:cursor-default'} h-30px md:h-[50px] md:w-[150px] rounded-lg p-2 pl-10 pr-10 flex flex-col justify-center items-center `}
      style={{
      backgroundColor: '#ff0088',
      userSelect: 'none'
      }}
      onClick={handlePrestige}
    >
      <p className="text-lg text-black font-black">PRESTIGE</p>
    </div>
  )
}

export default PrestigeButton;