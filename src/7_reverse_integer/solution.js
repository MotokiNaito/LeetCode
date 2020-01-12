/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {

  const absoluteNumber = Math.abs(x);
  const threshold = Math.pow(2, 31);

  if (x === 0) {
    return 0
  }

  const isSigned = x > 0 ? false : true;

  const cleanedNumber = `${absoluteNumber}`
    .split('')
    .reverse()
    .join('');

  Number(cleanedNumber)

  if (
    cleanedNumber > threshold - 1 ||
    cleanedNumber < -threshold
  ) {
    return 0
  }

  return isSigned ? -cleanedNumber : cleanedNumber;

};