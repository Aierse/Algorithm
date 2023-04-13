export function solution(n: number) {
    for (let i = 1; ; i++) {
        const needs = n * i;
     if (needs % 6 === 0)
         return needs / 6;
    }
}
