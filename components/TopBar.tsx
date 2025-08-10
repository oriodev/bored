import { CircleState, SetCircleState, SetNumber, SetPrestige } from "@/types"
import Speeds from "./Speeds"
import IconButton from "./IconButton";

// ICONS
import { BiCloud, BiReset } from "react-icons/bi";
import { setToDefault } from "@/utils/state.utils";


interface TopBarProps {
  circleState: CircleState;
  tutorialVisible: boolean;
  setTutorialVisible: (x: boolean) => void;
  setNumber: SetNumber;
  setCircleState: SetCircleState;
  setPrestige: SetPrestige;
}

const TopBar = ({ circleState, tutorialVisible, setTutorialVisible, setNumber, setCircleState, setPrestige }: TopBarProps ) => {

  const handleTutorialButton = () => {
    setTutorialVisible(!tutorialVisible)
  }

  const handleResetButton = () => {
    const confirmReset = window.confirm('Are you sure you want to reset your progress?');
    if (confirmReset) {
      setToDefault(setNumber, setCircleState, setPrestige);
    }
  }

  return (
    <div className="w-full flex flex-row flex-wrap justify-center sm:justify-between items-center">
      <div className="flex flex-grow justify-center items-center">
        <Speeds circleState={circleState} />
      </div>
      <div className="flex gap-1">
        <IconButton handleOnClick={handleTutorialButton} Icon={BiCloud} />
        <IconButton handleOnClick={handleResetButton} Icon={BiReset}/>
      </div>
    </div>
  )
}

export default TopBar;