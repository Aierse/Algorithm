export function solution(quiz: string[]) {
    return quiz.map(v => {
        let [express, result] = v.split('=')

        return eval(express) === +result ? 'O' : 'X'
    })
}