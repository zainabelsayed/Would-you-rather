import { RECEIVE_USERS, USER_NEW_QUESTION, USER_ANSWER } from '../actions/users'


export default function users (state={},action) {
    switch(action.type){
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case USER_ANSWER :
            const { authedUser,qid,answer} = action
            return {
                ...state,
                [authedUser]:{
                    ...state[authedUser],
                
                    answers:{
                    ...state[authedUser].answers,
                    [qid]: answer
                }
            }
            }
        case USER_NEW_QUESTION :
            return{
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.qid])
                }
            }
        
        default :
        return state
    }
}