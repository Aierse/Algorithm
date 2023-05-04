export function solution(number: number, n: number, m: number) {
    return +(!(number % n) && !(number % m));
}
