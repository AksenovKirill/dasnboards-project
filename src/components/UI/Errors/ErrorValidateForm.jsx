import React, { memo } from "react";

export const ErrorValidateForm = memo(({ children, ...props }) => {
  return (
    <div {...props} className="swal2-validation-message">
      <span style={{ fontWeight: "400" }}>{children}</span>
    </div>
  );
});
