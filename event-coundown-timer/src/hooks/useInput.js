import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  function handler(ev) {
    setValue(ev.target.value);
  }

  return [value, handler];
}

export default useInput;