import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Post from '../post/post'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/posts' component={Post} />
    <Redirect from='*' to='/' />
  </Router>
)