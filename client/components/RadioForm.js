import React from 'react'

class RadioForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const answer = this.state.value
    this.props.answerQuestion(answer)
  }
  
  render () {
    const question = this.props.questions[this.props.currentQuestion]
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="questions">{question.name}
        </label>
        {
          question.choices.map(choice => {
            return (
              <label key={choice.id}>
                <input type='radio' name='answer' value={choice.value} onClick={this.handleChange} />{choice.label}
              </label>
            )
          })
        }
        <button type='submit'> Next</button>
      </form>
    )
  }
}


export default RadioForm