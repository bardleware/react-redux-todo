import * as types from './actionTypes'

export const addTodo = (text) => ({ 
  type: types.ADD_TODO, 
  payload: { text }
})

export const updateNewTodoText = text => ({
  type: types.UPDATE_NEW_TODO_TEXT,
  payload: { text }
})
