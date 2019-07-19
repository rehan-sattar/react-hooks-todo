import React from "react";
import { TextField } from "@material-ui/core";
import useInputState from "../hooks/useInputState";

function EditForm({ id, initialValue, updateTodo, toggleEditForm }) {
  const [value, hadnleChange, reset] = useInputState(initialValue);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        updateTodo(id, value);
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
