import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import reducer from "../reducers/todos.reducer";

export const TodoContext = createContext();
export const DispatchContext = createContext();

const TodoProvider = props => {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || "[]";
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    initialTodos,
    reducer
  );

  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export default TodoProvider;
