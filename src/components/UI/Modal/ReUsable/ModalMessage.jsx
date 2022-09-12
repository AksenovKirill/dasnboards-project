import React, { memo } from "react";

export const ModalMessage = memo(({ message }) => {
  return (
    <div className="swal2-html-container" id="swal2-html-container" style={{ display: "block" }}>
      {message.title ? message.title : message}
    </div>
  );
});
