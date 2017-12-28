const _todos = (state) => state.todos

export const todos = (state) => _todos(state).todos
export const newTodoText = (state) => _todos(state).newTodoText
