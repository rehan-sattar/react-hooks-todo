import React, { useContext } from "react";
import { Paper, TextField } from "@material-ui/core";
import { TodoContext } from "../contexts/todos.context";
import useInputState from "../hooks/useInputState";

function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const { types, dispatch } = useContext(TodoContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: types.ADD_TODO, payload: value });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo.."
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
