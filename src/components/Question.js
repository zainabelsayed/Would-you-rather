import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'


class Question extends Component {
    render(){
       
        const { question,user} = this.props
        const {optionOne,optionTwo}= question
        const {name,avatarURL}=user
        return (
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
                        ></input>
                        <label>{optionOne.text}</label><br/>
                        <input
                        type='radio'
                        ></input>
                        <label>{optionTwo.text}</label>  
                    </div>
                   
                </div>
                <div className='col-3'>
                    <Button variant="success" className='btn'>Submit</Button>
                    </div> 
                
            </div>
        )
    }
}

function mapStateToProps ({authedUser,users,questions},{id}) {
    const question = questions[id]
    const user=users[question.author]
    setTimeout(()=>{console.log(questions)},100)
    return {
        authedUser,
        question,
        user
    }
}

export default connect(mapStateToProps)(Question)