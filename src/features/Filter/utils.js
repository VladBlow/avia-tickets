export const addElemToArray = (arr, el) =>
  arr.indexOf(el) === -1 ? [...arr, el] : arr;

export const removeElemFromArray = (arr, el) =>
  arr.indexOf(el) >= 0 ? arr.filter(item => item !== el) : arr;
