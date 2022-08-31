import React, { memo } from "react";

export const GoHomeLink = memo(({ children, to, ...props }) => {
  return (
    <>
      <button {...props} className="btn btn-primary">
        {children}
      </button>
    </>
  );
});
