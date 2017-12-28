import React from 'react'
import { connect } from 'react-redux'
import TodoList from './components/TodoList'
import todos from './index'

export const Container = ({newTodoText, addTodo, updateNewTodoText}) => (
  <div className='container'>
    <TodoList />
    <input type="text" value={newTodoText} onChange={updateNewTodoText}/>
    <button onClick={addTodo}> Add Todo </button>
  </div>
)
const mapState = (state) => ({
  newTodoText: todos.selectors.newTodoText(state)
})
export default connect(
  mapState,
  {
    addTodo: todos.actions.addTodo,
    updateNewTodoText: todos.actions.updateNewTodoText
  }
)(Container)