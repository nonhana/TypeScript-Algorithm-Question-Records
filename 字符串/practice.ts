const getNext = (str: string) => {
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

const strStr = (originStr: string, model: string): number => {
  if (model.length === 0) return 0;

  let next: number[] = getNext(model);
  let j: number = -1;

  for (let i = 0; i < originStr.length; i++) {
    while (j >= 0 && originStr[i] !== model[j]) {
      j = next[j];
    }

    if (originStr[i] === model[j + 1]) {
      if (j === model.length - 2) {
        return i - j - 1;
      }
      j++;
    }
  }
};
