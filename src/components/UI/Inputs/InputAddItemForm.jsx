import React, { useState } from "react";

export const INputAddItem = ({
  label,
  className,
  placeholder,
  handleSaveValue,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    handleSaveValue(inputValue);
  };

  return (
    <div className="mb-10 fv-row">
      <label className="required form-label">{label}</label>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};
