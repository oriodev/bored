import { formatNumber } from "@/utils/numbers.utils";

const Number = ({ number }: { number: number }) => {
  return (
    <p className="text-3xl md:text-4xl font-black">{formatNumber(number)}</p>
  )
}

export default Number;