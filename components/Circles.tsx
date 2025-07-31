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
          color="purple"
          visible={circleState.purple.visible}
          speed={circleState.purple.speed}
        >
          <Circle
            size={450}
            color="pink"
            visible={circleState.pink.visible}
            speed={circleState.pink.speed}
          >
            <Circle
              size={375}
              color="blue"
              visible={circleState.blue.visible}
              speed={circleState.blue.speed}
            >
              <Circle
                size={300}
                color="green"
                visible={circleState.green.visible}
                speed={circleState.green.speed}
              >
                <Circle
              size={225}
              color="yellow"
              visible={circleState.yellow.visible}
              speed={circleState.yellow.speed}
                >
                  <Circle
                    size={150}
                    color="orange"
                    visible={circleState.orange.visible}
                    speed={circleState.orange.speed}
                  >
                    <Circle
                      size={75}
                      color="red"
                      visible={circleState.red.visible}
                      speed={circleState.red.speed}
                      onComplete={circleState.red.complete}
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