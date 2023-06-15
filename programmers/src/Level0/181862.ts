export function solution(myStr: string) {
    const answer = myStr.split(/[a-c{1}]/g).filter((v) => v !== "");
    return answer.length === 0 ? ["EMPTY"] : answer; 
}
