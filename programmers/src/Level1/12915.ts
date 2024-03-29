export function solution(strings: string[], n: number) {
  return strings.sort((a, b) => {
    if (a[n] !== b[n]) return a[n] > b[n] ? 1 : -1;

    return a > b ? 1 : -1;
  });
}
