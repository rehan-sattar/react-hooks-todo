import React from "react";
import useFormState from "./hooks/useFormState";

function Form() {
  const [email, setEmail, resetEmail] = useFormState("");
  const [name, setName, resetName] = useFormState("");
  const [password, setPassword, resetPassword] = useFormState("");
  const submitHandler = e => {
    e.preventDefault();
    console.log();
    resetEmail();
    resetName();
    resetPassword();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="email" value={email} onChange={setEmail} />
        <br />
        <input type="text" value={name} onChange={setName} />
        <br />
        <input type="password" value={password} onChange={setPassword} />
        <br />
        <button type="submit">Submit</button>
        <pre>
          {JSON.stringify({
            name,
            email
          })}
        </pre>
      </form>
    </div>
  );
}

export default Form;
