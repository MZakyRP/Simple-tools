import { useState } from "react";

function useInput(init: number): any {
  const [value, setValue] = useState(init);

  function handler(ev: any): void {
    setValue(ev.target.value);
  }

  return [value, handler];
}

export default useInput;