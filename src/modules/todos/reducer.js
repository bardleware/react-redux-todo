import * as types from './actionTypes'
const initialState = {
  newTodoText: '',
  todos: []
}
export default (state = initialState, action) => {
  switch (action.type){
    case types.ADD_TODO:
      return {
        newTodoText: '',
        todos: [
        ...state, 
        {
          completed: false,
          text: action.payload.text
        }
      ]
    }
    case types.UPDATE_NEW_TODO_TEXT:
      return {
        newTodoText: action.payload.text,
        todos: state.todos,
      }
    default:
      return state
  }
}