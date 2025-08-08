import { CircleState } from "@/types"
import Speeds from "./Speeds"
import TutorialButton from "./TutorialButton";

interface TopBarProps {
  circleState: CircleState;
  tutorialVisible: boolean;
  setTutorialVisible: (x: boolean) => void;
}

const TopBar = ({ circleState, tutorialVisible, setTutorialVisible }: TopBarProps ) => {
  return (
    <div className="w-full flex flex-row flex-wrap justify-center sm:justify-between items-center">
      <div className="flex flex-grow justify-center items-center">
        <Speeds circleState={circleState} />
      </div>
      <TutorialButton tutorialVisible={tutorialVisible} setTutorialVisible={setTutorialVisible} />
    </div>
  )
}

export default TopBar;