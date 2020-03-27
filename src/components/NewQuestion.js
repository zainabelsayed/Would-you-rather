import  React,{ Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import  Card  from 'react-bootstrap/Card'
import  Form from 'react-bootstrap/Form'
import  Button  from 'react-bootstrap/Button'





class NewQuestion extends Component {
    state={
        optionOne:'',
        optionTwo:'',
        toHome: false
    }
    handleChangeOne= (e) => {
        const optionOne= e.target.value
        this.setState(()=>({
            optionOne,
        }))
    }
    handleChangeTwo= (e) => {
        const optionTwo = e.target.value
        this.setState(()=>({
            optionTwo
        }))
    }
    handleSubmite= (e)=>{
        e.preventDefault()
        const { optionOne, optionTwo}= this.state
        const { dispatch, authedUser} = this.props
        console.log(authedUser)
        dispatch(handleAddQuestion(optionOne,optionTwo,authedUser))
        this.setState(()=>({
            optionOne:'',
            optionTwo:'',
            toHome: true
        }))
    }

    render(){
        const { optionOne, optionTwo,toHome} = this.state
        if ( toHome === true){
            return <Redirect to= '/'/>
        }
        return(
            <div className='new-question'>
                <Card style={{ width: '40rem'}}>
                <Card.Header className='center'><b><h4>Create New Question</h4></b></Card.Header>
                    <Card.Body className='container'>
                    <Card.Text> Complete the question</Card.Text>
                    <Card.Title>Would You Rather...</Card.Title>
                    <Form>
                    <Form.Group >
                        <Form.Label>Option One</Form.Label>
                        <Form.Control value={optionOne} onChange={this.handleChangeOne} type="text" placeholder="Enter Option One Text Here" />
                    </Form.Group>
                    <Form.Text  className='center'><b>OR</b></Form.Text>
                    <Form.Group >
                    <Form.Label>Option Two</Form.Label>
                    <Form.Control value={optionTwo} onChange={this.handleChangeTwo} type="text" placeholder="Enter Option Two Text Here" />
                    </Form.Group>
                    {optionOne&&optionTwo !== ''?
                     <Button onClick={this.handleSubmite} style={{margin:0}} variant="success" className='btn'>Submit</Button>
                    : <Button onClick={this.handleSubmite} style={{margin:0}} variant="success" className='btn' disabled>Submit</Button>}
                    </Form>
                    </Card.Body>
                </Card>
                

            </div>
            
        )
    }

}

function mapStateToProps ({authedUser}) {
    
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)