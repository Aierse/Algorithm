export function solution(nums: number[]) {
    var answer = [...new Set(nums)];
    return nums.length / 2 <= answer.length ? nums.length / 2 : answer.length;
}
