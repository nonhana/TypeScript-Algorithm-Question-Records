function fn(arr: number[], val: number) {
  let slowIndex: number = 0;
  let fastIndex: number = 0;

  while (fastIndex < arr.length) {
    if (arr[fastIndex] !== val) {
      arr[slowIndex] = arr[fastIndex];
      slowIndex++;
    }
    fastIndex++;
  }
  return slowIndex;
}
