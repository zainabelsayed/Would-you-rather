import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import {Tab, Tabs} from 'react-bootstrap'



class Dashboard extends Component {
   
    render(){
        const {questions,answerdQ}= this.props
        return(
            <div className='dashboard-list container'>
                <Tabs fill defaultActiveKey="profile" defaultActiveKey="unanswered">
                    <Tab eventKey="unanswered" title="Unanswered Questions">
                        <ul>
                        {answerdQ?Object.keys(questions).filter(id=>!answerdQ.includes(id))
                        .sort((a,b)=> questions[b].timestamp-questions[a].timestamp)
                            .map((id)=>(
                        <li key={id}>
                            

                            <Poll id={id}/>
                        </li>
                    )):null

                    }
                        </ul>
                    </Tab>
                    <Tab eventKey="answered" title="Answered Questions">
                            <ul>
                            {answerdQ?answerdQ.map((id)=>(
                                <li key={id}>
                                    

                                    <Poll id={id}/>
                                </li>
                            )):null

                            }
                            
                        </ul>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser,users}) {
    let user=users[authedUser]
    let answerdQ=null
    return {
        questionIds: Object.keys(questions)
            .sort((a,b)=> questions[b].timestamp-questions[a].timestamp),
        user:user? user=user.answers:null,
        answerdQ:user?Object.keys(user).sort((a,b)=> questions[b].timestamp-questions[a].timestamp):null,
        questions,
        authedUser,

    }
}

export default connect(mapStateToProps)(Dashboard)