import React, { memo } from "react";

export const ErrorValidateForm = memo(({ children, ...props }) => {
  return <div {...props}>{children}</div>;
});
