import React , { Component } from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { Dropdown, Segment, Header, Divider,Image } from 'semantic-ui-react'
import { connect } from 'react-redux'



class SignIn extends Component {
    state = {}

  handleChange = (e, { value }) =>{
        const {dispatch}=this.props
       this.setState({ value })
       dispatch(setAuthedUser(value))
    }
    render(){
        const {users,userIds}=this.props
        const {value,toHome}=this.state
       let options=[]
       { userIds.map((id)=>(
                      
        options.push({key:users[id].id,text:users[id].name,value:users[id].id,image:{avatar:true,src:users[id].avatarURL}})
     
        ))
        }
        return (
            <div className='new-question'>
            <Segment className='center'>
                <Header as='h2'><b>Welcome to the Would You Rather App!</b></Header>
                <p>Please Sign in to continue</p>
                <Divider/>
                <Image
                centered
                src='https://miro.medium.com/max/1200/1*i1yreXvK0kGrS9_uy5qKHQ.jpeg'  
                size='small'
                />
                <Header as='h2' color='green'><b>Sign In</b></Header>
                <Dropdown
                    placeholder='Sign In'
                    fluid
                    selection
                    options={options}
                    value={value}
                    onChange={this.handleChange}
                />
                    {console.log(options,value)}
            
            </Segment>
            </div>
        )
    }
}

function mapStateToProps ({authedUser,users,questions}){
    const userIds=Object.keys(users)
    return {
        users,
        userIds,
    }
}


export default  connect(mapStateToProps)(SignIn)