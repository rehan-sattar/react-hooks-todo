import React, { useState } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const initialTodos = [
    { id: "1", task: "clean something", completed: false },
    { id: "2", task: "do something", completed: true },
    { id: "3", task: "Do something interesting", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoTask => {
    setTodos([...todos, { id: "4", task: newTodoTask, completed: false }]);
  };
  return (
    <Paper style={{ padding: 0, margin: 0, height: "100vh" }} elevation={0}>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
