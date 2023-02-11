const mathRound = (value: number, precision: number): number => {
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
};

export default mathRound;
