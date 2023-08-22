export function solution(s1: string[], s2: string[]) {
  let answer = 0;

  s2.forEach((v) => {
    answer += s1.includes(v) ? 1 : 0;
  });

  return answer;
}
