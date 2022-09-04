import React, { memo } from "react";

export const InputLoginForm = memo(
  ({ label, register, placeholder, validation, style }) => {
    return (
      <div className="fv-row mb-8" style={style}>
        <input
          placeholder={placeholder}
          className="form-control bg-transparent"
          {...register(label, { ...validation })}
        />
      </div>
    );
  }
);
