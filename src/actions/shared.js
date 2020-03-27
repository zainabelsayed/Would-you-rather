import { getInitialData } from '../utils/api'
import { receiveUsers, userNewQuestion, userAnswer } from './users'
import { receiveQuestions, addQuestion, saveAnswer} from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import { 
    saveQuestion, saveQuestionAnswer
} from '../utils/api'




//const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users,questions})=>{
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                //dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}
export function handleAddQuestion (optionOneText,optionTwoText,authedUser){
    
    return (dispatch) => {
        const newQuestion = {
            optionOneText,
            optionTwoText,
            author:authedUser
        }
        
        dispatch(showLoading())
        return saveQuestion(newQuestion)
        .then((question)=>{
            dispatch(addQuestion(question))
            dispatch(userNewQuestion(authedUser,question.id))}
        )
        .then(()=>
          dispatch(()=>dispatch(hideLoading()))
        )
    }
}
export function handleSaveAnswer (authedUser,qid,answer) {
    
    return (dispatch) => {
        dispatch(showLoading())     
        return saveQuestionAnswer({authedUser,qid,answer})
                .then(()=>{
                    dispatch(saveAnswer({authedUser,qid,answer}))
                    dispatch(userAnswer({authedUser,qid,answer}))
                })
                .then(()=>
                    dispatch(()=>dispatch(hideLoading()))
                    )
            }
}