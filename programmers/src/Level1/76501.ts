export function solution(absolutes: number[], signs: boolean[]) {
    return absolutes.map((v, i) => signs[i] ? v : -v).reduce((a, c) => a + c);
}
