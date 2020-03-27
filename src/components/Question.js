import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { handleSaveAnswer } from '../actions/shared'


class Question extends Component {

    state = {
        answer: '',
        toResults:false
    }
    
    handleChange= (e) => {
        const answer = e.target.value
        this.setState(()=>({
            answer
        }))
    }

    handleSubmite = (e) => {
        e.preventDefault()
        const { answer } = this.state
        const {dispatch,authedUser,id,users} = this.props
        const qid = id
        dispatch(handleSaveAnswer(authedUser,qid,answer))
        this.setState(()=>({
            toResults:true
        }))
    }


    render(){
        const {questions,id}=this.props
        if (!Object.keys(questions).includes(id)){
            return <Redirect to= '/404'/>
        }
        const { question,user} = this.props
        const {optionOne,optionTwo}= question
        const {name,avatarURL}=user
        const {answer,toResults} = this.state
        if ( toResults === true){
            return <Redirect to= {`/results/${id}`}/>
        }
        return (
            <div>
                <div className='question'>
                <div className='col-3'>
                <img
                src={avatarURL}
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
                        <input
                        type='radio'
                        name='options'
                        value='optionOne'
                        checked={this.state.answer === 'optionOne'}
                        onChange={this.handleChange}
                        />
                        <label> &nbsp;{optionOne.text}</label><br/>
                        <input
                        type='radio'
                        name='options'
                        value='optionTwo'
                        checked={this.state.answer === 'optionTwo'}
                        onChange={this.handleChange}
                        />
                        <label> &nbsp;{optionTwo.text}</label>  
                    </div>
                   {console.log(answer)}
                </div>
                <div className='col-3'>
                    {this.state.answer!== ''?
                    <Button variant="success" className='btn' onClick={this.handleSubmite}>Submit</Button>
                :<Button variant="success" className='btn' onClick={this.handleSubmite} disabled >Submit</Button>}
                    </div> 
                
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser,users,questions},{id}) {
   
    const question =Object.keys(questions).includes(id)?questions[id]:null
    const user=Object.keys(questions).includes(id)?users[question.author]:null

    return {
        authedUser,
        question,
        users,
        user,
        questions,
        id
    }
}

export default connect(mapStateToProps)(Question)