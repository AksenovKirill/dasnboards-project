import { useState } from "react";
import { useValidation } from "./useValidation";

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isFull, setFull] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onBlur = () => {
    setFull(true);
  };

  return {
    value,
    isFull,
    ...valid,
    onChange,
    onBlur,
  };
};
