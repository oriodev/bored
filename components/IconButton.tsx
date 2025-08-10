import { IconType } from "react-icons";

interface IconButtonProps {
  handleOnClick: () => void;
  Icon: IconType;
}

const IconButton = ({ handleOnClick, Icon }: IconButtonProps ) => {
  return (
      <div
        className="rounded-full p-2 hover:opacity-90 hover:cursor-pointer"
        onClick={handleOnClick}
        style={{
          backgroundColor: '#ff0088'
        }}
      >
        <p className="text-black">
          <Icon size={20} />
        </p>
      </div>

  )
}

export default IconButton;