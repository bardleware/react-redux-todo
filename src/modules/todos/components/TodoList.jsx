import React from 'react'
import {connect} from 'react-redux'
import todos from '../index'
import Todo from './Todo'

export const TodoList = ({todos}) => (
  <ul>
  {
    todos.map((item, idx) => <Todo key={idx} {...item} />)
  }
  </ul>
)

export default connect(
  state => ({todos: todos.selectors.todos(state)}),
  {
    addTodo: todos.actions.addTodo
  }
)(TodoList)
