const findWords = function (words) {
  const keyboard = {
    "row1": ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    "row2": ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    "row3": ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  }
  const output = [];
  const r1 = keyboard["row1"];
  const r2 = keyboard["row2"];
  const r3 = keyboard["row3"];

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();

    if (r1.includes(word[0]) && check(word, r1))
      output.push(words[i]);

    if (r2.includes(word[0]) && check(word, r2))
      output.push(words[i]);

    if (r3.includes(word[0]) && check(word, r3))
      output.push(words[i]);
  }
  return output;
};

const check = function (word, r) {
  for (let i = 1; i < word.length; i++) {
    if (!r.includes(word[i]))
      return false;
  }
  return true;
};