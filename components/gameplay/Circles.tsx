import { CircleState, PrestigeState } from "@/types";
import Circle from "./Circle";
import { useState, useEffect } from "react";

interface CirclesProps {
  circleState: CircleState;
  prestige: PrestigeState;
  setPrestige: (updater: PrestigeState | ((prev: PrestigeState) => PrestigeState)) => void;
  number: number;
  setNumber: (updater: number | ((prev: number) => number)) => void;
}

const Circles = ({ circleState, prestige, setPrestige, number, setNumber }: CirclesProps) => {
  const [sizes, setSizes] = useState([535, 450, 375, 300, 225, 150, 75]);

  useEffect(() => {
    const calculateSizes = () => {
      if (typeof window !== 'undefined') {
        const baseWidth = window.innerWidth;
        const scaleFactor = baseWidth < 640 ? 0.5 : baseWidth < 1024 ? 0.7 : 1;
        const newSizes = [
          Math.floor(535 * scaleFactor),
          Math.floor(450 * scaleFactor),
          Math.floor(375 * scaleFactor),
          Math.floor(300 * scaleFactor),
          Math.floor(225 * scaleFactor),
          Math.floor(150 * scaleFactor),
          Math.floor(75 * scaleFactor)
        ];
        setSizes(newSizes);
      }
    };

    calculateSizes();

    window.addEventListener('resize', calculateSizes);

    return () => window.removeEventListener('resize', calculateSizes);
  }, []);

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
    <div className="relative w-full h-2/3 m-5 flex justify-center items-center overflow-hidden">
      {sizes.map((size, index) => (
        <Circle
          key={index}
          size={size}
          circle={colors[index]}
          prestige={prestige}
          setPrestige={setPrestige}
          number={number}
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
