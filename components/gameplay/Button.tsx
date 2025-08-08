import { Circle } from "@/types";
import { formatNumber } from "@/utils/numbers.utils";

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
        className={`${ purchaseable ? 'opacity-100 hover:cursor-pointer hover:opacity-90' : locked ? 'opacity-10 hover:default' : 'opacity-50 hover:default'} h-[50px] w-[90px] h-[50px] w-[90px] md:h-[70px] md:w-[150px] lg:h-[90px] lg:w-[180px] rounded-lg p-2 pl-5 pr-5 md:pl-10 md:pr-10 flex flex-col justify-center items-center `}
        style={{
          backgroundColor: `var(--${colour})`,
          userSelect: 'none'
        }}
        onClick={handlePurchase}
      >
        <p className="pb-0 text-black text-sm md:text-xl font-black">{ colour.toUpperCase() }</p>

        {
          circle.unlocked && (
            circle.upgradesUnlocked === ( circle.autoReq ) ? (
              <div className="text-black text-center">
                <p className="block sm:hidden text-xs">auto unlock</p>
                <p className="hidden sm:block text-md">auto unlock for { formatNumber(cost) }</p>
              </div>
             ) : 
             (
              <>
                <p className="pt-0 text-black text-md md:text-xl text-center">{ formatNumber(cost) } </p>
              </>
            )
          )
        }
      </div>
  )
}

export default Button;