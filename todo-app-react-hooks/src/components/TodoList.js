import React from "react";
import {
  Paper,
  List,
  ListItem,
  Divider,
  ListItemText
} from "@material-ui/core";

function TodoList({ todos }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <>
            <ListItem key={index}>
              <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
