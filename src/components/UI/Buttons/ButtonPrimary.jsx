import React, { memo } from "react";

export const ButtonPrimary = memo(({ className, onClick, children, type, ...props }) => {
  return (
    <button className={`btn btn-primary ${className}`} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
});
