import { useState } from "react";

const useToggle = (intiaLValue = false) => {
  const [state, setState] = useState(intiaLValue);
  const toggler = () => setState(!state);
  return [state, toggler];
};

export default useToggle;
