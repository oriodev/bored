import { CircleState } from "@/types";
import Button from "./Button";

interface ButtonsProps {
  circleState: CircleState;
  setCircleState: (x: CircleState | ((prev: CircleState) => CircleState)) => void;
  number: number;
  setNumber: (updater: number | ((prev: number) => number)) => void;
}

const Buttons = ({ circleState, setCircleState, number, setNumber }: ButtonsProps) => {

  const handlePurchaseRed = () => {
    console.log('handling');
    console.log('number: ', number)

    if (number >= 5) {
      console.log('hello')
      setNumber(prev => prev - 5);
      setCircleState(
        (prev: CircleState) => (
          {
            ...prev,
            red: {
              ...prev.red,
              speed: prev.red.speed * 0.75
            }
          }
        )
      )
    }
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      <Button colour="red" handlePurchase={handlePurchaseRed} />
      <Button colour="orange"  handlePurchase={handlePurchaseRed} />
      <Button colour="yellow"  handlePurchase={handlePurchaseRed} />
      <Button colour="green"  handlePurchase={handlePurchaseRed} />
      <Button colour="blue"  handlePurchase={handlePurchaseRed} />
      <Button colour="pink"  handlePurchase={handlePurchaseRed} />
      <Button colour="purple"  handlePurchase={handlePurchaseRed} />
    </div>
  )
}

export default Buttons;