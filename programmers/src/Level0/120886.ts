export function solution(before: string, after: string) {
    return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}
