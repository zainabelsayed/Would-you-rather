import React , { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { Card,Segment,Label } from 'semantic-ui-react'
import {Progress} from 'reactstrap'


class Results extends Component {
    render () {
        const {questions,id}=this.props
        if (!Object.keys(questions).includes(id)){
            return <Redirect to= '/404'/>
        }
        const { question, users,authedUser}=this.props
        const {optionOne,optionTwo}=question
        const totalVotes= optionOne.votes.length + optionTwo.votes.length
        const percentOne = (((optionOne.votes.length)/totalVotes)*100).toFixed(0)
        const percentTwo = (((optionTwo.votes.length)/totalVotes)*100).toFixed(0)
        console.log(totalVotes,percentOne,percentTwo)
        const user=users[question.author]
        return (
            <div className='new-question'>
                <Card style={{ width: '40rem'}} className='row'>  
                <Card.Content header={`Asked by ${user.name} `} />
                <Card.Content style={{ display:'flex'}}>
                <img className='avatar-results' src={user.avatarURL}/>
                <div className="vl-result"></div>
                <div className='col-8'>
                    <h3>Results:</h3>
                    <Segment>
                    <p><b>Would you rather {optionOne.text}?</b></p>
                    <Progress animated bar color="success" value={percentOne}>{percentOne}%</Progress>
                    {users[authedUser].answers[id]=== 'optionOne'
                    ? <Label circular color='yellow' floating>
                    Your vote
                  </Label>:null}
                        <p><b>{optionOne.votes.length} out of {totalVotes} votes</b></p>   
                    </Segment>
                    <Segment>
                    <p><b>Would you rather {optionTwo.text}?</b></p>
                    <Progress animated bar color="success" value={percentTwo}>{percentTwo}%</Progress>
                    {users[authedUser].answers[id]=== 'optionTwo'
                        ? <Label circular color='yellow' floating>
                        Your vote
                    </Label>:null}
                        <span><b>{optionTwo.votes.length} out of {totalVotes} votes</b></span>
                        
                    </Segment>
                </div>
                </Card.Content>
                </Card>
            </div>
            
        )
    }
}

function mapStateToProps ({ authedUser, users, questions},{id}) {
    const question =Object.keys(questions).includes(id)? questions[id]:null
    console.log (id, questions)
    return {
        authedUser,
        question,
        users,
        questions,
        id
    }
}

export default connect(mapStateToProps)(Results)