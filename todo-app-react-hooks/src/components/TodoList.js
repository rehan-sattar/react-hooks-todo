import React from "react";
import { Paper, List, Divider, Grid } from "@material-ui/core";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodos, updateTodo }) {
  return (
    <Paper>
      <List>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <>
              <Todo
                {...todo}
                removeTodo={removeTodo}
                toggleTodos={toggleTodos}
                updateTodo={updateTodo}
              />
              {index < todos.length - 1 && <Divider />}
            </>
          ))
        ) : (
          <Grid container justify="center">
            <Grid item style={{ margin: "0 0.5rem" }}>
              <AssignmentTurnedInIcon />
            </Grid>
            <Grid>No Todos yet!</Grid>
          </Grid>
        )}
      </List>
    </Paper>
  );
}

export default TodoList;
