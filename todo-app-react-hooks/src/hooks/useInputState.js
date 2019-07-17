import { useState } from "react";
/**
 * pattern for this hook
 * @hookName  useFormState
 * @syntax const [formInput, formInputChangeHandler, formInputResetHandler] = useFormState(formInputInitialValue);
 */

export default intialValue => {
  const [value, setValue] = useState(intialValue);
  // handle change
  const handleChange = e => {
    setValue(e.target.value);
  };
  // reset changes.
  const reset = () => setValue("");

  return [value, handleChange, reset];
};
