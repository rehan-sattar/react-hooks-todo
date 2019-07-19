import React from "react";
import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggle from "../hooks/useToggle";
import EditForm from "./EditForm";

function Todo({
  id,
  key,
  task,
  completed,
  removeTodo,
  toggleTodos,
  updateTodo
}) {
  const [isEditable, setIsEditable] = useToggle(false);
  const toggleEditForm = () => {
    setIsEditable(!isEditable);
  };
  return (
    <ListItem key={key} style={{ height: "64px" }}>
      {isEditable ? (
        <EditForm
          id={id}
          initialValue={task}
          updateTodo={updateTodo}
          toggleEditForm={toggleEditForm}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodos(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={toggleEditForm}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
