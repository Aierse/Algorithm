export function solution(i: number, j: number, k: number) {
    let answer = 0;
    for (; i <= j; i++) {
        answer += [...i.toString()].flat().filter(v => +v === k).length
    }
    return answer;
}
