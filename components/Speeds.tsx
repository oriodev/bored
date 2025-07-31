import { CircleState } from "@/types";

interface SpeedsProps {
  circleState: CircleState;
}

const Speeds = ({ circleState }: SpeedsProps ) => {
  return (
    <div className="flex gap-5">
      <p className="text-lg font-bold text-red-400">{ circleState.red.speed }</p>
      <p>x</p>
      <p className="text-lg font-bold text-orange-400">{ circleState.orange.speed }</p>
      <p>x</p>
      <p className="text-lg font-bold text-yellow-400">{ circleState.yellow.speed }</p>
      <p>x</p>
      <p className="text-lg font-bold text-green-400">{ circleState.green.speed }</p>
      <p>x</p>
      <p className="text-lg font-bold text-blue-400">{ circleState.blue.speed }</p>
      <p>x</p>
      <p className="text-lg font-bold text-pink-400">{ circleState.pink.speed }</p>
      <p>x</p>
      <p className="text-lg font-bold text-purple-400">{ circleState.purple.speed }</p>

    </div>
  )
}

export default Speeds;