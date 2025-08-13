import { formatNumber } from "@/utils/numbers.utils";

const Number = ({ number }: { number: number }) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <p className="text-3xl md:text-4xl font-black">{formatNumber(number)}</p>
    </div>
  )
}

export default Number;