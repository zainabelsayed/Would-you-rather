import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom'
class Poll extends Component {
    
    render(){
        const { question, name,avatar,users,authedUser } = this.props
        const {optionOne,id}= question
        
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
                        <span>...{optionOne.text} Or ....</span>
                        
                    </div>
                   
                </div>
                <div className='col-3'>
                    {Object.keys(users[authedUser].answers).includes(id)
                    ?<Link to={`/results/${id}`}><Button variant="outline-success" className='btn' onClick={this.handleSubmit}>View Poll</Button></Link>
                : <Link to={`/question/${id}`}><Button variant="outline-success" className='btn' onClick={this.handleSubmit}>View Poll</Button></Link>}
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
        users,
        name:users[question.author].name,
        avatar:users[question.author].avatarURL
    }
}

export default connect(mapStateToProps)(Poll)