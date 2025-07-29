import { useState } from "react";

export default function useCustomHook(initialName) {
  const [name, setName] = useState(initialName);
  const bind = {
    value: name,
    onChange: (e) => setName(e.target.value),
  };
  return [name, bind];
}
