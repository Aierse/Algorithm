export function solution(common: number[]) {
    let step = common[1] - common[0]
    let last = common.at(-1)!

    return step === common[2] - common[1] ? last + step : last * (common[2] / common[1]) / step 
}
