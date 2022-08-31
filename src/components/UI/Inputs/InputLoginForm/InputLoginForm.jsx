import React, { memo } from "react";

export const InputLoginForm = memo(
  ({ children, type, errors, onChange, onBlur }) => {
    return (
      <div className="fv-row mb-8">
        <input
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          className="form-control bg-transparent"
        />
      </div>
    );
  }
);
