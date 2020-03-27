import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import ResultsPage from './ResultsPage'
import LeaderBoard from './LeaderBoard'
import Nave from './Nave'
import SignIn from './SignIn'
import PageNotFound from './PageNotFound'


class App extends Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }
    
    render(){
        const {authedUser}=this.props
        return(
            <Router>
                <div>{
                    authedUser === null ?(
                        <Route
                        render={
                            ()=>(
                                <div>
                                <Nave/>
                                <SignIn/>
                                </div>
                            )
                        }
                        />
                    )
                    :(
                        <Fragment>
                <LoadingBar/>
                    <Nave/>
                    
                    <div className='container'>
                        <div>
                        <Switch>
                       <Route path='/' exact component={Dashboard}/>
                       <Route path='/question/:id' exact component={QuestionPage}/>
                       <Route path='/new' exact component={NewQuestion}/>
                       <Route path='/results/:id' exact component={ResultsPage}/>
                       <Route path='/leaderboard' exact component={LeaderBoard}/> 
                       <Route path='/404' exact component={PageNotFound}/> 
                       </Switch>
                        </div> 
                    </div>
                </Fragment>
                    )
                        }
                </div>
            </Router>
        )
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(App)