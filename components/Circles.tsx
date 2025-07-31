import { CircleState } from "@/types";
import Circle from "./Circle";

interface CirclesProps {
  circleState: CircleState;
}

const Circles = ({ circleState }: CirclesProps ) => {

 return (
       <div className="w-2/3 h-2/3 flex justify-center items-center overflow-hidden">
        <Circle
          size={535}
          circle = {circleState.purple}
        >
          <Circle
            size={450}
            circle = {circleState.pink}
          >
            <Circle
              size={375}
              circle = {circleState.blue}
            >
              <Circle
                size={300}
                circle = {circleState.green}
              >
                <Circle
                  size={225}
                  circle = {circleState.yellow}
                >
                  <Circle
                    size={150}
                    circle = {circleState.orange}
                  >
                    <Circle
                      size={75}
                      circle = {circleState.red}
                    />
                  </Circle>
                </Circle>
              </Circle>
            </Circle>
          </Circle>
        </Circle>
      </div>
 )
}

export default Circles;