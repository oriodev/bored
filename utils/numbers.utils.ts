export const formatNumber = (number: number) => {
  const suffixes = [
    '', 'K', 'M', 'B', 'T', 'Qa', 'Qt'
  ]

  if (number < 1000) return number.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 1});

  const tier = Math.log10(number) / 3 | 0; // | 0 is a cool rounding/truncating trick
  const rounded = number / (10 ** (tier * 3));
 

  return rounded.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2} ) + suffixes[tier];
}
