export function solution(num_list: number[]) {
  const answer: { [key: string]: string } = {
    odd: "",
    even: "",
  };

  for (const num of num_list) {
    if (num % 2 === 0) answer.odd += num;
    else answer.even += num;
  }

  return +answer.odd + +answer.even;
}
