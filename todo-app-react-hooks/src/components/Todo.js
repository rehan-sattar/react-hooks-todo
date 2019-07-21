import React, { useContext } from "react";
import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { TodoContext } from "../contexts/todos.context";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggle from "../hooks/useToggle";
import EditForm from "./EditForm";

function Todo({ id, key, task, completed }) {
  const [isEditable, setIsEditable] = useToggle(false);
  const toggleEditForm = () => {
    setIsEditable(!isEditable);
  };
  const { types, dispatch } = useContext(TodoContext);
  return (
    <ListItem key={key} style={{ height: "64px" }}>
      {isEditable ? (
        <EditForm id={id} initialValue={task} toggleEditForm={toggleEditForm} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => dispatch({ type: types.TOGGLE_TODO, payload: id })}
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
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: types.REMOVE_TODO, payload: id })}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
