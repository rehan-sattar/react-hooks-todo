import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { TodoContext } from "../contexts/todos.context";
import useInputState from "../hooks/useInputState";

function EditForm({ id, initialValue, toggleEditForm }) {
  const [value, hadnleChange, reset] = useInputState(initialValue);
  const { types, dispatch } = useContext(TodoContext);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: types.UPDATE_TODO, payload: { id, value } });
        toggleEditForm();
        reset();
      }}
      style={{ width: "70%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={hadnleChange}
        autoFocus
        fullWidth
        style={{ marginLeft: "1rem" }}
      />
    </form>
  );
}

export default EditForm;
