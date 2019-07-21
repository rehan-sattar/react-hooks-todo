import React from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoProvider from "../contexts/todos.context";

function TodoApp() {
  return (
    <Paper style={{ padding: 0, margin: 0, height: "100vh" }} elevation={0}>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoProvider>
            <TodoForm />
            <TodoList />
          </TodoProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
