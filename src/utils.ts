export const resultTemplate = (curSeedMoney: number, ascent: number) =>
  `${curSeedMoney}원 (${ascent > 0 ? '+' : '-'} ${(ascent * 100).toFixed(2)}%)`;

export const _sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));
