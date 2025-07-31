import { Circle } from "@/types";

interface ButtonProps {
  circle: Circle;
  colour: string;
  handlePurchase: () => void;
  cost: number;
  num: number;
}

const Button = ({ circle, colour, handlePurchase, cost, num }: ButtonProps ) => {
  const show = circle.unlocked && cost <= num;

  return (
      <div 
        className={`${show ? 'opacity-100 hover:cursor-pointer' : 'opacity-50 hover:default'} rounded-lg p-2 pl-10 pr-10 flex flex-col justify-center items-center `}
        style={{
          backgroundColor: `var(--${colour})`,
          userSelect: 'none'
        }}
        onClick={handlePurchase}
      >
        <p className="pb-0 text-black text-lg font-black">{ colour.toUpperCase() } ( + { circle.upgradesUnlocked || 0 } )</p>
        <p className="pt-0 text-black text-sm">{ cost }</p>
      </div>
  )
}

export default Button;