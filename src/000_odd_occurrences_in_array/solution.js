function solution(A) {
  const makeIntegerOccurrencesMap = (map, nextInteger) => {
    const isMissingKey = key => map[key] === undefined;

    if (isMissingKey(nextInteger)) {
      map[nextInteger] = 0;
    }

    ++map[nextInteger];

    return map;
  }

  const isOdd = number => (number % 2) !== 0;
  const integerOccurrencesMap = A.reduce(makeIntegerOccurrencesMap, {});

  return +Object.keys(integerOccurrencesMap)
    .find(integer => isOdd(integerOccurrencesMap[integer]));
}