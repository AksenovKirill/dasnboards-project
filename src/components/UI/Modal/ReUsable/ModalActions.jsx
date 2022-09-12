import React from "react";
import { memo } from "react";

export const ModalActions = memo(({ children }) => {
  return (
    <div className="swal2-actions" style={{ display: "flex", margin: "0 0" }}>
      <div className="swal2-loader" />
      {children}
    </div>
  );
});
