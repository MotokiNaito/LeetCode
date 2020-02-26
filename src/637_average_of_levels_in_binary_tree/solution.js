const averageOfLevels = function (root) {
  let result = [],
    currentLevel = [];
  currentLevel.push(root);

  while (currentLevel.length > 0) {
    let num = currentLevel.length,
      sum = 0;
    let i = num;
    while (i > 0) {
      let node = currentLevel.shift();
      sum += node.val;
      if (node.left)
        currentLevel.push(node.left);
      if (node.right)
        currentLevel.push(node.right);
      i--;
    }
    result.push(sum / num);
  }

  return result;
};