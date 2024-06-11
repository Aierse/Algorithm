export function solution(myString: string, pat: string) {
  return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}
