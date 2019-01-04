import React, {Component} from 'react'
import axios from 'axios';
import RadioForm from './RadioForm'
import Result from './Result'

export default class Questions extends Component {
  constructor() {
    super()

    this.state = {
      questions: [],
      answers: [],
      currentQuestion: 0,
    }
  }

  async componentDidMount () {
    const {data} = await axios.get('api/questions')
    this.setState({questions: data})
  }

  answerQuestion = (answer) => {
    this.setState(prevState => {
      return ({
        answers:[...prevState.answers, answer],
        currentQuestion: prevState.currentQuestion + 1
      })
    })
  }

  render () {
    const { questions, answers, currentQuestion } = this.state;

    return (
      <div>
        <h3>Which Drink Are You?</h3>
        {
          questions.length > answers.length ? 
          questions.length > 0 && <RadioForm questions={this.state.questions} answerQuestion={this.answerQuestion} currentQuestion={this.state.currentQuestion} />
          : <Result answers={this.state.answers} />
        }
      </div>
    )
  }
}