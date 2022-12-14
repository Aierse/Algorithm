namespace p142086 {
    function solution(s: string): Array<number> {
        let solve: number[] = Array<number>(s.length).fill(-1);
    
        [...s].forEach((char, index) => {
            for (let j = index - 1; j >= 0; j--) {
                if (char === s[j]) {
                    solve[index] = index - j
                    break
                }
            }
        })
    
        return solve
    }

    console.log(solution("banana"))
    console.log(solution("poobar"))
}