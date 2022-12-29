export function solution(id_pw: string[], db: string[]) {
    for (const i of db) {
        if (i[0] === id_pw[0] && i[1] === id_pw[1]) return 'login'
        else if (i[0] === id_pw[0] && i[1] !== id_pw[1]) return 'wrong pw'
    }

    return 'fail'
}