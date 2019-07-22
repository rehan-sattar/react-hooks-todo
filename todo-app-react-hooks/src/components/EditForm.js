import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { DispatchContext } from "../contexts/todos.context";
import useInputState from "../hooks/useInputState";

function EditForm({ id, initialValue, toggleEditForm }) {
  const [value, hadnleChange, reset] = useInputState(initialValue);
  const dispatch = useContext(DispatchContext);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "UPDATE_TODO", payload: { id, value } });
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
