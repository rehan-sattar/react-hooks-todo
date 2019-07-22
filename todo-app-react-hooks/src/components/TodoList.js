import React, { useContext } from "react";
import { Paper, List, Divider, Grid } from "@material-ui/core";
import { TodoContext } from "../contexts/todos.context";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Todo from "./Todo";

function TodoList() {
  const todos = useContext(TodoContext);
  return (
    <Paper>
      <List>
        {todos && todos.length > 0 ? (
          todos.map((todo, index) => (
            <React.Fragment key={index}>
              <Todo {...todo} />
              {index < todos.length - 1 && <Divider />}
            </React.Fragment>
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
