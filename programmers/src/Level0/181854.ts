export function solution(arr: number[], n: number) {
  if (arr.length % 2 === 0)
    return arr.map((v, i) => {
      if (i % 2 === 1) v += n;

      return v;
    });
  else
    return arr.map((v, i) => {
      if (i % 2 === 0) v += n;

      return v;
    });
}
