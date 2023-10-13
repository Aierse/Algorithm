export function solution(my_string: string, indices: number[]) {
    let answer = [...my_string];
    for (const index of indices.sort((a,b) => b - a)) {
        answer.splice(index, 1);
    }
    return answer.join('');
}