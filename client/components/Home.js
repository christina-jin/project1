import React from 'react'
import Questions from './Questions'
import { Route, withRouter } from 'react-router-dom'

class Home extends React.Component {
  validate = () => {
    const checkBox = document.getElementById("agree")
    if (!checkBox.checked) {
      alert('You need to be at least 21 years old to take this quiz!')
      return false
    }
    return true;
  }
  
  handleSubmit= (event) => {
    event.preventDefault()
    if (this.validate()) this.props.history.push('/drinkquiz')
  }

  render () {
    return (
      <div>
          <h1> 🍸🍻 Which Drink Are You?🍹🍷</h1>
        <form action="" className="agree" onSubmit={this.handleSubmit}>
          <div className='agree'>
          <input type="checkbox" name="agree" id="agree"></input>
          <small>I confirm I am at least 21 years old!</small>
          </div>
          <button type="submit">Take the Quiz!</button>
        </form>
        <Route path='./drinkquiz' component={Questions} />
      </div>
    )
  }
}

export default withRouter(Home);