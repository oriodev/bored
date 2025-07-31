interface ButtonProps {
  colour: string;
  handlePurchase: () => void;
}

const Button = ({ colour, handlePurchase }: ButtonProps ) => {

  return (
      <div 
        className="rounded-lg p-2 pl-10 pr-10 text-black text-lg font-black flex justify-center items-center hover:cursor-pointer"
        style={{
          backgroundColor: `var(--${colour})`,
        }}
        onClick={handlePurchase}
      >
        { colour.toUpperCase() } ( + 1 )
      </div>
  )
}

export default Button;