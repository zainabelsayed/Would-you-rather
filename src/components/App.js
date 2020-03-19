import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import Question from './Question'
import Poll from './Poll'


class App extends Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }
    
    render(){
        return(
            <Router>
                <Fragment>
                <LoadingBar/>
                    <div className='container'>
                        {this.props.loading===true
                        ?null
                    :<div>
                       <Route path='/' exact component={Dashboard}/>
                       <Route path='/question/:id' component={Question}/>
                       <Route path='/poll/:id' component={Poll}/>
                    </div> }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps(authedUser){
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)