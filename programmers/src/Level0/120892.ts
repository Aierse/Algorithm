export function solution(cipher: string, code: number) {
  let answer = "";

  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }

  return answer;
}
