import React, { Component } from 'react'
import { connect } from 'react-redux'
import Results from './Results'

class ResultsPage extends Component {
    render(){
        const {id} = this.props
        return (
            <div>
              <Results id={id} />  
            </div>
        )
    }
}

function mapStateToProps ({authedUser,questions,users},props) {
    const { id } = props.match.params
    return {
        id,
    }
}

export default connect(mapStateToProps)(ResultsPage)