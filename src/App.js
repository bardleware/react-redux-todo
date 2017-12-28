import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import configureStore from './configureStore'

import Todos from './modules/todos/Container'

const store = configureStore()

export default () => (
  <Provider store={ store }>
    <Router>
      <Switch>
        <Route component={ Todos } />
      </Switch>
    </Router>
  </Provider>
)
