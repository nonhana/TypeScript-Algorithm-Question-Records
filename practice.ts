const arr = [1, 2, 3, 4, 5];

console.log(
  arr.reduce((res, item) => {
    res.set(item, (res.get(item) || 0) + 1);
    return res;
  }, new Map<number, number>())
);
