export function solution(t: string, p: string) {
  let answer: string[] = [];

  for (let i = 0; i < t.length - p.length + 1; i++) {
    answer.push(t.slice(i, i + p.length));
  }

  return answer.filter((v) => +v <= +p).length;
}
