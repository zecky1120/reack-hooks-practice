import { useState } from "react";

export default function useFullNameHook() {
  const [familyName, setFamilyName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = `${familyName} ${lastName}`;

  const familyNameInputProps = {
    value: familyName,
    onChange: (e) => setFamilyName(e.target.value),
  };
  const lastNameInputProps = {
    value: lastName,
    onChange: (e) => setLastName(e.target.value),
  };
  return { fullName, familyNameInputProps, lastNameInputProps };
}
