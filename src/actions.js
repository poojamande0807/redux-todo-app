export const ADD_TODO = "ADD_TODO";

export const TOGGLE_TODO = "TOGGLE_TODO";

export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (title) => ({

  type: ADD_TODO,

  payload: { title, status: false, id: Date.now() },

});

export const toggleTodo = (id) => ({

  type: TOGGLE_TODO,

  payload: id,

});

export const deleteTodo = (id) => ({

  type: DELETE_TODO,

  payload: id,

});