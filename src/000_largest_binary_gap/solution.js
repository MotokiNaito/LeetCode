function largestBinaryGap(num) {
  const binary = Math.abs(num).toString(2);
  let finalMax = 0;
  let currentMax;

  for (let i = 0; i < binary.length; i++) {
    currentMax = 0;
    while (binary[i] === "0") {
      ++currentMax && ++i;
    }
    finalMax = Math.max(finalMax, currentMax);
  }
  return finalMax;
}