export function solution(a: number, d: number, included: boolean[]) {
    return included.map((v, i) => v ? a + d * i : 0).reduce((acc, cur) => acc + cur);
}
