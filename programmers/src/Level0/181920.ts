export function solution(start: number, end: number) {
    return Array(end - start + 1).fill(start).map((v, i) => v +i);
}
