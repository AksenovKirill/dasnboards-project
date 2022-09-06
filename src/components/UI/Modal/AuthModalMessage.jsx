import React, { memo } from "react";

export const AuthModalMessage = memo(({ successMessage, errorMessage }) => {
  return (
    <div
      className="swal2-html-container"
      id="swal2-html-container"
      style={{ display: "block" }}
    >
      {errorMessage}
      {successMessage?.title}
    </div>
  );
});
