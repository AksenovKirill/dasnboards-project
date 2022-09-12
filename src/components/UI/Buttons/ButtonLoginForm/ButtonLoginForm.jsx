import React, { memo } from "react";

export const ButtonLoginForm = memo(({ className, children, ...props }) => {
  return (
    <div className="d-grid mb-10">
      <button className={`btn btn-primary ${className}`} {...props}>
        {children}
      </button>
    </div>
  );
});
