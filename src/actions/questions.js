export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}


export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function saveAnswer ( {authedUser, qid, answer} ){
    
    return {
        type: SAVE_ANSWER,
        qid,
        authedUser,
        answer
    }
}

