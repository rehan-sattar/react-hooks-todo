import { useEffect, useReducer } from "react";

function useLocalStorageReducer(key, initialValue, reducer) {
  const [state, dispatch] = useReducer(reducer, initialValue, () => {
    let val;
    try {
      val = JSON.parse(
        window.localStorage.getItem(key) || String(initialValue)
      );
    } catch (err) {
      val = initialValue;
    }
    return val;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, dispatch];
}

export default useLocalStorageReducer;
