import uuid from "uuid/v4";

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

export const types = {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, { id: uuid(), task: payload, completed: false }];
    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === payload.id ? { ...todo, task: payload.value } : todo
      );

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== payload);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

export default reducer;
