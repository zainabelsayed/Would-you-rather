import React , { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Image, Grid, Segment,Header,Card, Label } from 'semantic-ui-react'

class LeaderBoard extends Component {
    render(){
        const {users,userIds}=this.props
        console.log(userIds)
        return(
            <div className='leader-board'>
                {userIds.map((id)=>(
                    <Segment.Group horizontal key={id}>
                    <Segment className='col-3'>
                        {userIds[0]=== id
                            ?<Label color='yellow' as='a' corner='left' icon='trophy'/>
                            :userIds[1]=== id
                            ?<Label color='green' as='a' corner='left' icon='trophy'/>
                            :<Label color='grey' as='a' corner='left' icon='trophy'/>
                            }
                        <Image
                        src={users[id].avatarURL}
                        className='avatar-l'
                        />
                    </Segment>
                    
                    <Segment>
                        <Header as='h2'>{users[id].name}</Header>
                        <b><p>Answered questions<span style={{display:'inline-block', width:'120px'}}></span> {Object.keys(users[id].answers).length}</p></b>
                        <Divider/>
                        <b><p>Created questions<span style={{display:'inline-block', width:'135px'}}></span> {users[id].questions.length}</p></b>
                       
                    </Segment>
                    
                    <Segment className='col-3'>
                   
                    <Segment >
                        <Header>Score</Header>
                        <Divider/>
                        <Label circular color='green' size='massive'>
                            {(Object.keys(users[id].answers).length)+(users[id].questions.length)}
                        </Label>
                    </Segment>
                    </Segment>
                  </Segment.Group>
              
                ))}
                </div>
        )
    }
}

function mapStateToProps ({authedUser,users,questions}){
    return {
        users,
        userIds:Object.keys(users)
            .sort((a,b)=>((Object.keys(users[b].answers).length)+(users[b].questions.length))
            -((Object.keys(users[a].answers).length)+(users[a].questions.length)))
    }
}

export default connect(mapStateToProps)(LeaderBoard)