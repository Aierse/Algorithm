export function solution(start: number, end: number) {
    const answer = [];
    
    for (let i = start; i >= end; i--) {
        answer.push(i);
    }

    return answer;
}
