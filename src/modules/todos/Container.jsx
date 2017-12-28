import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from './components/TodoList'
import todos from './index'

export class Container extends Component {

handleAddTodo(e) {
  this.props.addTodo(this.props.newTodoText)
  e.preventDefault()
}

handleUpdateNewTodoText(e){
  console.log(e.target.value)
  this.props.updateNewTodoText(e.target.value)
}


render() {
  const { newTodoText } = this.props

  return (
  <div className='container'>
    <input type="text" value={ newTodoText } onChange={ e => this.handleUpdateNewTodoText(e) }/>
    <button onClick={ e => this.handleAddTodo(e) }> Add Todo </button>
    <TodoList />
  </div>
)}
}


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
