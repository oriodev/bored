import { CircleState } from "@/types";

interface SpeedsProps {
  circleState: CircleState;
}

const Speeds = ({ circleState }: SpeedsProps ) => {
  return (
    <div className="flex gap-1 md:gap-5">
      <p className="text-xs md:text-lg font-bold text-red-400">{ circleState.red.speed.toFixed(4) }</p>
      <p className="text-xs md:text-lg">x</p>
      <p className="text-xs md:text-lg font-bold text-orange-400">{ circleState.orange.speed.toFixed(4) }</p>
      <p className="text-xs md:text-lg">x</p>
      <p className="text-xs md:text-lg font-bold text-yellow-400">{ circleState.yellow.speed.toFixed(4) }</p>
      <p className="text-xs md:text-lg">x</p>
      <p className="text-xs md:text-lg font-bold text-green-400">{ circleState.green.speed.toFixed(4) }</p>
      <p className="text-xs md:text-lg">x</p>
      <p className="text-xs md:text-lg font-bold text-blue-400">{ circleState.blue.speed.toFixed(4) }</p>
      <p className="text-xs md:text-lg">x</p>
      <p className="text-xs md:text-lg font-bold text-pink-400">{ circleState.pink.speed.toFixed(4) }</p>
      <p className="text-xs md:text-lg">x</p>
      <p className="text-xs md:text-lg font-bold text-purple-400">{ circleState.purple.speed.toFixed(4) }</p>

    </div>
  )
}

export default Speeds;