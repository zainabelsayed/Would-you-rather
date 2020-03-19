import { 
    saveQuestion, saveQuestionAnswer
} from '../utils/api'

import { showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion (question){
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestion(question)
        .then((question)=>
            dispatch(addQuestion(question))
        )
        .then(()=>
            dispatch(()=>dispatch(hideLoading()))
        )
    }
}

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function saveAnswer ({ authedUser, qid, answer }){
    return {
        type: SAVE_ANSWER,
        qid,
        authedUser,
        answer
    }
}

export function handleSaveAnswer (info) {
    return (dispatch) => {
        dispatch(saveAnswer(info))

        return saveQuestionAnswer(info)
            .catch((e) => {
                console.warn('Error in handleSaveAnswer')
                dispatch(saveAnswer(info))
                alert('An Error occured. Please Try again.')
            })
    }
}