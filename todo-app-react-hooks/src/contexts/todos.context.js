import React, { createContext, useReducer } from "react";
import reducer, { types } from "../reducers/todos.reducer";

export const TodoContext = createContext();

const TodoProvider = props => {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos"));
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <TodoContext.Provider value={{ todos, dispatch, types }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
