export function solution(str1: string, str2: string) {
    let answer = "";

    for (let i = 0; i < str1.length; i++) {
        answer += str1[i] + str2[i];
    }

    return answer;
}