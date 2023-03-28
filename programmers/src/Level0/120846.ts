export function solution(n: number) {
  let answer = 0;

  for (let i = 4; i <= n; i++) {
    let temp = new Set();

    for (let divisor = 1; divisor <= Math.sqrt(i); divisor++) {
      if (i % divisor === 0) {
        temp.add(divisor);
        temp.add(i / divisor);
      }
    }

    if (temp.size >= 3) answer++;
  }
  return answer;
}

console.log(solution(10));
console.log(solution(15));
