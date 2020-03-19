import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Redirect} from 'react-router-dom'
class Poll extends Component {
    state={
        toQuestion: false
    }
    handletoQuestion=(e, id)=>{
        e.preventDefault()
        this.setState(()=>({
            toQuestion: id ? false : true,
        }))
    }
    
    render(){
        const {toQuestion} = this.state
        const { question, name,avatar } = this.props
        const {optionOne,id}= question
        if(toQuestion === true){
            return <Redirect push to={`/question/:${question.id}`}/>
        }
        console.log(id)
        return(
            <div className='question'>
                <div className='col-3'>
                <img
                src={avatar}
                alt={`avatar of ${name}`}
                className='avatar'
                />
                </div>
                
                <div className="vl"></div>
                <div className='question-info col-6'>
                    <div>
                        <h4>{name} asks:</h4>
                        <hr/>
                        <h5 style={{color:'gray'}}>Would You Rather?</h5>
                        <p>...{optionOne.text} Or ....</p>
                        
                    </div>
                   
                </div>
                <div className='col-3'>
                   <Button variant="outline-success" className='btn' onClick={this.handletoQuestion}>View Poll</Button>
                    </div> 
                
            </div>
        )
    }
}

function mapStateToProps ({authedUser,users,questions},{id}) {
    const question = questions[id]
    return {
        authedUser,
        question,
        name:users[question.author].name,
        avatar:users[question.author].avatarURL
    }
}

export default connect(mapStateToProps)(Poll)