import React, { memo } from "react";

export const InputTableCheckbox = memo(({ isChecked, handleClick, id }) => {
  return (
    <div>
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        onChange={handleClick}
        checked={isChecked}
      />
    </div>
  );
});
