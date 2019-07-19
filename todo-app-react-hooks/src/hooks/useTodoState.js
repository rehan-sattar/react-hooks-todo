import { useState } from "react";
import uuidV4 from "uuid/v4";

export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoTask => {
    setTodos([...todos, { id: uuidV4(), task: newTodoTask, completed: false }]);
  };
  const removeTodo = todoId => {
    const remainingTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(remainingTodos);
  };
  const toggleTodos = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  const updateTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return [
    todos,
    {
      addTodo,
      removeTodo,
      toggleTodos,
      updateTodo
    }
  ];
};
