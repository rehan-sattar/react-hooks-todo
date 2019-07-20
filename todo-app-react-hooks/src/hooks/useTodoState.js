import uuidV4 from "uuid/v4";
import useLocalStorage from "./useLocalStorage";

export default initialTodos => {
  const [todos, setTodos] = useLocalStorage("todos", initialTodos);
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
