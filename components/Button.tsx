import { Circle } from "@/types";

interface ButtonProps {
  circle: Circle;
  colour: string;
  handlePurchase: () => void;
  cost: number;
  num: number;
}

const Button = ({ circle, colour, handlePurchase, cost, num }: ButtonProps ) => {
  const purchaseable = circle.unlocked && cost <= num;
  const locked = !circle.unlocked;

  return (
      <div 
        className={`${ purchaseable ? 'opacity-100 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out' : locked ? 'opacity-10 hover:default' : 'opacity-50 hover:default'} h-[90px] w-[180px] rounded-lg p-2 pl-10 pr-10 flex flex-col justify-center items-center `}
        style={{
          backgroundColor: `var(--${colour})`,
          userSelect: 'none'
        }}
        onClick={handlePurchase}
      >
        <p className="pb-0 text-black text-lg font-black">{ colour.toUpperCase() }</p>

        {
          circle.unlocked && (
            circle.upgradesUnlocked === ( circle.autoReq ) ? (
              <p className="pt-0 text-black text-md text-center">auto unlock for { cost }</p>
             ) : (
              <>
                <p className="pt-0 text-black text-md">cost: { cost }</p>
                <p className="pt-0 text-black text-md">bought: { circle.upgradesUnlocked || 0 }</p>
              </>
            )
          )
        }
      </div>
  )
}

export default Button;