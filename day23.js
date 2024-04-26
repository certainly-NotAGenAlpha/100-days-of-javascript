const findMode = (array) => {
  const counts = {};
  for (let i = 0; i < array.length; i++) {
    if (counts[array[i]]) {
      counts[array[i]]++;
    } else {
      counts[array[i]] = 1;
    }
  }

  let maxCount = 0;
  let mode;
  for (let num in counts) {
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mode = num;
    }
  }

  return Number(mode);
};
