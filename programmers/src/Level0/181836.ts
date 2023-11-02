export function solution(picture: string[], k: number) {
  const answer: string[] = [];

  picture.forEach((v) => {
    let temp = "";

    for (const char of v) {
      temp += char.repeat(k);
    }

    for (let i = 0; i < k; i++) {
      answer.push(temp);
    }
  });

  return answer;
}
