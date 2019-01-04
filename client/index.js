
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Questions from './components/Questions'


ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/drinkquiz' component={Questions} />
    </div>
  </Router>,
  document.getElementById('app')
)