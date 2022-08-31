import React, { memo } from "react";

export const ButtonPrimary = memo(({ className, children, type, ...props }) => {
  return (
    <button className={`btn btn-primary ${className}`} type={type} {...props}>
      {children}
    </button>
  );
});
