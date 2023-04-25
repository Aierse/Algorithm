export function solution(strArr: string[]) {
  return strArr.filter((v) => !v.includes("ad"));
}
