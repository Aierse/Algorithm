export function solution(array: number[]) {
    let answer: { [key: number]: number }= {};
    array.forEach(v => {
        if (answer[v] === undefined)
            answer[v] = 1
        else
            answer[v]++;
    })
    
    let max = 0;
    let key = 0;
    
    for (let value in answer) {
        if (max < answer[value]) {
            max = answer[value]
            key = +value
        }
    }
    
    for (let value in answer) {
        if (key !== +value && max === answer[value])
            key = -1
    }
    
    return key
}
