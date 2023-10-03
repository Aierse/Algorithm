export function solution(myString: string, pat: string) {
    return +[...myString].map((v) => v === 'A' ? 'B' : 'A').join('').includes(pat);
}
