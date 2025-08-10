import { CircleState, PrestigeState, SetCircleState, SetPrestige } from "@/types";
import { prestigeReset } from "@/utils/state.utils";

interface PrestigeButtonProps {
  prestige: PrestigeState;
  setPrestige: SetPrestige;
  setCircleState: SetCircleState;
}

const PrestigeButton = ({ prestige, setPrestige, setCircleState }: PrestigeButtonProps) => {

  const handlePrestige = () => {
    if (!prestige.prestigeAvailable) return;
    prestigeReset(setCircleState, setPrestige);
  }

  return (
    <div
      className={`${prestige.prestigeAvailable ? 'opacity-100 hover:opacity-90 hover:cursor-pointer' : 'opacity-0 hover:cursor-default'} h-30px md:h-[50px] md:w-[150px] rounded-lg p-2 pl-10 pr-10 flex flex-col justify-center items-center `}
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