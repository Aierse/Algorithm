export function solution(age: number) {
    return [...age.toString()].map(v => "abcdefghij"[+v]).join('');
}
