const fn = (str: string) => {
  let next: number[] = [];
  let j: number = -1;
  next[0] = j;
  for (let i = 0; i < str.length; i++) {
    while (j >= 0 && str[i] !== str[j + 1]) {
      j = next[j];
    }
    if (str[i] === str[j + 1]) {
      j++;
    }
    next[i] = j;
  }
  return next;
};

const target = (str: string, model: string) => {
  if (model.length === 0) return 0;

  let next: number[] = fn(model);
  let j: number = -1;

  for (let i = 0; i < str.length; i++) {
    while (j >= 0 && str[i] !== str[j]) {
      j = next[j];
    }
    if (str[i] === str[j + 1]) {
      if (j === model.length - 2) {
        return i - j - 1;
      }
      j++;
    }
  }

  return -1;
};
