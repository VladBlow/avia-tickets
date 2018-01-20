export const getStopsText = number => {
  if (!number) return 'Без пересадок';

  const lastSymbol = +number.toString().slice(-1);
  let endingWord = '';

  if (lastSymbol === 1) endingWord = 'кa';
  if (lastSymbol >= 2 && lastSymbol <= 4) endingWord = 'ки';
  if (lastSymbol >= 5 && lastSymbol <= 9) endingWord = 'ок';

  return `${number} пересад${endingWord}`;
};
