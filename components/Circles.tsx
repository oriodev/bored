import { CircleState } from "@/types";
import Circle from "./Circle";

interface CirclesProps {
  circleState: CircleState;
  setNumber: (updater: number | ((prev: number) => number)) => void;
}

const Circles = ({ circleState, setNumber }: CirclesProps) => {
  const sizes = [535, 450, 375, 300, 225, 150, 75];
  const colors = [
    circleState.purple,
    circleState.pink,
    circleState.blue,
    circleState.green,
    circleState.yellow,
    circleState.orange,
    circleState.red,
  ];

  return (
    <div className="relative w-2/3 h-2/3 flex justify-center items-center overflow-hidden">
      {sizes.map((size, index) => (
        <Circle
          key={index}
          size={size}
          circle={colors[index]}
          setNumber={setNumber}
          style={{
            position: 'absolute',
            top: `calc(50% - ${size / 2}px)`,
            left: `calc(50% - ${size / 2}px)`,
          }}
        />
      ))}
    </div>
  );
}

export default Circles;
