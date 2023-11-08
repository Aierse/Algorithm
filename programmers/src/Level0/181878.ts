export function solution(myString: string, pat: string) {
  return +myString.toLowerCase().includes(pat.toLowerCase());
}
