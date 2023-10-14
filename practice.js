const flat = (arr) => {
  if (Object.prototype.toString.call(arr) !== "[object array]") return false;
  let resArr = [];

  arr.forEach((item) => {
    if (item instanceof Array) {
      resArr.push(...flat(item));
    } else {
      resArr.push(item);
    }
  });

  return resArr;
};
