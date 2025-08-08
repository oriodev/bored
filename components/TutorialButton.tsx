import { BiCloud } from "react-icons/bi";

interface TutorialButtonProps {
  tutorialVisible: boolean;
  setTutorialVisible: (x: boolean) => void;
}

const TutorialButton = ({ tutorialVisible, setTutorialVisible }: TutorialButtonProps ) => {
  return (
      <div
        className="rounded-full p-2 hover:opacity-90 hover:cursor-pointer"
        onClick={() => setTutorialVisible(!tutorialVisible)}
        style={{
          backgroundColor: '#ff0088'
        }}
      >
        <p className="text-black">
          <BiCloud size={20} />
        </p>
      </div>

  )
}

export default TutorialButton;