import { useState } from "react";

export default function useFullNameHook(initialName) {
  const [familyName, setFamilyName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = `${familyName} ${lastName}`;

  const [name, setName] = useState(initialName);
  const bind = {
    value: name,
    onChange: (e) => setName(e.target.value),
  };
  return [name, bind];
}
