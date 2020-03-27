export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ANSWER = 'USER_ANSWER'
export const USER_NEW_QUESTION = 'USER_NEW_QUESTION'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function userAnswer ({qid,authedUser,answer}){
    
    return {
        type:USER_ANSWER,
        qid,
        authedUser,
        answer
    }
}

export function userNewQuestion (authedUser,qid){
    return {
        type: USER_NEW_QUESTION,
        qid,
        authedUser
    }
}