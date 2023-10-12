export function solution(strArr: string[]) {
  const answer: { [key: number]: string[] } = {};

  for (const item of strArr) {
    if (answer[item.length] === undefined) answer[item.length] = [];

    answer[item.length].push(item);
  }

  return Math.max(...Object.values(answer).map((v) => v.length));
}
