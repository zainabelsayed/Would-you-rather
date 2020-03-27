import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'

class Nave extends Component {
    state = { activeItem: 'home' }
    handleItemClick =(e, { name }) =>
      this.setState({ activeItem: name })
      handleLogOut=(e)=>{
          e.preventDefault()
          const { dispatch } = this.props
          dispatch(setAuthedUser(null))
      }
    render(){
        const { activeItem } = this.state
        const { authedUser,users }= this.props
        const user = users[authedUser]
        return(
            <div className='container'>
                <Menu color='green' inverted>
                    <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    as={NavLink}
                    exact to='/'
                    />
                    <Menu.Item
                    name='new question'
                    active={activeItem === 'new question'}
                    onClick={this.handleItemClick}
                    as={NavLink}
                    exact to='/new'
                    />
                    <Menu.Item
                    name='leader board'
                    active={activeItem === 'leader board'}
                    onClick={this.handleItemClick}
                    as={NavLink}
                    exact to='/leaderboard'
                    />
                    <Menu.Menu position='right'>
                    <Menu.Item>
                        {
                            user?
                            <p>Hello, {user.name} !</p>
                            :null
                        }
                        
                    </Menu.Item>
                    <Menu.Item>
                        {
                            user?
                            <img
                            className='nav-avatar'
                            src={user.avatarURL}
                            />:null
                        }
                        
                    </Menu.Item>
                    <Menu.Item
                    name='log out'
                    active={activeItem === 'logout'}
                    onClick={this.handleLogOut}
                    as={NavLink}
                    exact to='/'
                    />
                    </Menu.Menu>
                     
                   
                </Menu>
            </div>
             
            
        )
    }
}

function mapStateToProps({users,authedUser}){
   
    return{
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Nave)