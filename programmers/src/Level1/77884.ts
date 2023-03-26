export function solution(left: number, right: number) {
  let answer = 0;

  for (let divigee = left; divigee <= right; divigee++) {
    const list = new Set();
    for (let divisor = 1; divisor <= Math.sqrt(divigee); divisor++) {
      if (divigee % divisor === 0) {
        list.add(divisor);
        list.add(divigee / divisor);
      }
    }

    answer += list.size % 2 === 0 ? divigee : -divigee;
  }

  return answer;
}

console.log(solution(9, 10));
