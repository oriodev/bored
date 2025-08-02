const Number = ({ number }: { number: number }) => {
  return (
    <p className="text-4xl font-black">{number.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 1})}</p>
  )
}

export default Number;