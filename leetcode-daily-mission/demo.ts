// 种花问题
const canPlaceFlowers = (flowers: number[], n: number): boolean => {
  let count: number = 0;
  for (let i = 0; i < flowers.length; i++) {
    if (flowers[i] === 0) {
      let prev = i === 0 ? 0 : flowers[i - 1];
      let next = i === flowers.length - 1 ? 0 : flowers[i + 1];
      if (prev === 0 && next === 0) {
        flowers[i] = 1;
        count++;
      }
    }
  }
  if (count >= n) {
    return true;
  } else {
    return false;
  }
};
