export function solution(d: number[], budget: number) {
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    budget -= d[i];

    if (budget < 0) return i;
  }

  return d.length;
}
