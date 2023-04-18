export function solution(emergency: number[]) {
    let answer = [...emergency].sort((a, b) => b - a);
    return emergency.map((v1) => (answer.findIndex((v2) => (v2 === v1)) + 1));
}
